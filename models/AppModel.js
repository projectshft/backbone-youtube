var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection(),
      currentVideo: null,
    }
  },

  initialize: function () {
    this.listenTo(this.get("videos"), "update", this.setCurrentVideo)
  },

  setCurrentVideo: function (newVideos) {
    this.set("currentVideo", newVideos.models[0]);
  }
  
});