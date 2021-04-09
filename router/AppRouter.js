var AppRouter = Backbone.Router.extend({
  routes: {
    "video/:id": "searchForVideo",
    "videos/:searchTerm": "searchForVideos",
  },

  initialize: function () {
    this.listenTo(appModel, "change:currentVideo", this.updateUrl)
  },

  updateUrl: function () {
    var numberOfVideos = appModel.get("videos").length;
    if (numberOfVideos === 1) {
      this.navigate(`/video/${appModel.get("currentSearchTerm")}`)
    } else {
      this.navigate(`/videos/${appModel.get("currentSearchTerm")}/${appModel.get("currentVideo").get("id")}`)
    }
    
  },

  searchForVideo(id) {
    appModel.updateSearchTerm(id, "videoId");
  },

  searchForVideos(searchTerm) {
    appModel.updateSearchTerm(searchTerm);
  }
})