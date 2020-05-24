var AppView = Backbone.View.extend({
  el: $("body"),

  events: {
    "click #search-button": "searchYouTube",
    "click .suggested-video-link": "changeMainVideo",
  },

  initialize: function () {
    this.$searchInput = this.$("#search-input");
    this.$mainVideoBox = this.$("#main-content");
    this.$suggestedVideos = this.$("#suggested-videos");

    this.listenTo(this.model.get("videos"), "reset", this.renderPage);

    // we want the page to load with default search term
    // this.renderPage();
  },

  searchYouTube: function () {
    var searchTerm = this.$searchInput.val();

    // check for empty strings as an edge case
    if (searchTerm === "") {
      alert(
        "The search input was an empty string, so the app didn't search. More info in developer console."
      );
      throw new Error("The search input was empty");
    }

    // update the model by passing through the search term
    this.model.updateVideosCollection(searchTerm);
  },

  renderPage: function () {
    this.renderMainVideo();
    this.renderAllSuggestedVideos();
  },

  renderAllSuggestedVideos: function () {
    this.$suggestedVideos.empty();

    var allVideos = this.model.get("videos");
    var suggestedVideos = allVideos.where({ main: false });
    console.log("Suggested videos are ", suggestedVideos);

    // use forEach because #where returns an array
    suggestedVideos.forEach(function (suggestedVideo) {
      this.renderSuggestedVideo(suggestedVideo);
    }, this);
  },

  renderSuggestedVideo: function (suggestedVideo) {
    var suggestedVideoView = new SuggestedVideosView({
      model: suggestedVideo,
    });
    this.$suggestedVideos.append(suggestedVideoView.render().el);
  },

  // render main video
  renderMainVideo: function () {
    this.$mainVideoBox.empty();

    var allVideos = this.model.get("videos");
    var mainVideoModel = allVideos.findWhere({ main: true });
    console.log("The main video model is ", mainVideoModel);

    var mainVideoHandlebars = new MainVideoView({ model: mainVideoModel });
    console.log("The handlebars is ", mainVideoHandlebars);
    this.$mainVideoBox.append(mainVideoHandlebars.render().el);
  },

  changeMainVideo: function (event) {
    // send the desired video's info to the AppModel to handle
    var desiredId = $(event.currentTarget).data().id;

    this.model.changeMainVideo(desiredId);

    // we'll want to re-render the page
    this.renderPage();
  },
});
