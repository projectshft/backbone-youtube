var AppView = Backbone.View.extend({
  el: $("body"),

  events: {
    "click #search-button": "searchYouTube",
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

    // saving for later use, but don't want to get ahead of

    var allVideos = this.model.get("videos");
    var mainVideoModel = allVideos.findWhere({ main: true });
    console.log("The main video model is ", mainVideoModel);

    var mainVideoHandlebars = new MainVideoView({ model: mainVideoModel });
    console.log("The handlebars is ", mainVideoHandlebars);
    this.$mainVideoBox.append(mainVideoHandlebars.render().el);
  },
});
