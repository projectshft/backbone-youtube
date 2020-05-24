var AppView = Backbone.View.extend({
  el: $("body"),

  events: {
    "click #search-button": "searchYouTube",
  },

  initialize: function () {
    this.$searchInput = this.$("#search-input");
    this.$mainVideoBox = this.$("#main-content");
    this.renderMainVideo();
  },

  searchYouTube: function () {
    console.log(this.$searchInput.val());
    // send the value from the search bar to the VideosCollection
  },

  // render main video
  renderMainVideo: function () {
    // handlebars stuff

    // saving for later use, but don't want to get ahead of myself
    // var mainVideoModel = this.model.get("videos").at(0);

    // we need a model to pass to handlebars
    var mainVideoModel = {
      videoId: "shlsRbZaB60",
    };

    var mainView = new MainVideoView({ model: mainVideoModel });
    this.$mainVideoBox.append(mainView.render().el);
  },
});
