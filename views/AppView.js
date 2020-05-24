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
    var searchTerm = this.$searchInput.val();

    // update the model by passing through the search term
    this.model.updateVideosCollection(searchTerm);
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
