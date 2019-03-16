const AppModel = Backbone.Model.extend({
  defaults: function () {
    // AppModel should contain the VideosCollection
    return {
      videos: new VideosCollection()
    }
  }
})