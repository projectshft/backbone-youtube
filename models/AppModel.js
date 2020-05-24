var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideoCollection(),
      videoList: new VideoListCollection()
    }
  }
});