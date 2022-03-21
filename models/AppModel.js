var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection(),
      current_video: {}
    }
  },

  updateCurrentVideo: function (id) {
    var currentVideo = this.get('videos')._byId[id];
    this.set('current_video', currentVideo);
  },
})