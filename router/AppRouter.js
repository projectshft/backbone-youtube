var AppRouter = Backbone.Router.extend({
  routes: {
    "video/:id": "searchForVideo",
    "videos/:searchTerm": "searchForVideos",
  },

  initialize: function () {
    this.listenTo(appModel, "change:currentVideo", this.updateUrl)
  },

  //Sets the new url upon the current video being changed
  updateUrl: function () {
    var numberOfVideos = appModel.get("videos").length;
    if (numberOfVideos === 1) {
      this.navigate(`/video/${appModel.get("currentSearchTerm")}`)
    } else {
      this.navigate(`/videos/${he.encode(appModel.get("currentSearchTerm"))}/${appModel.get("currentVideo").get("id")}`)
    }
  },

  //When user loads the page with a url ending with #video/{id} the page will load with the single video having that id
  searchForVideo(id) {
    appModel.updateSearchTerm(id, "videoId");
  },

  //When user loads the page with a url ending with #videos/{searchTerm} the page will load with the top five videos returned for that search term.
  searchForVideos(searchTerm) {
    appModel.updateSearchTerm(searchTerm);
  }
})