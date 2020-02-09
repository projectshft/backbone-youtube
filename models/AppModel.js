var AppModel = Backbone.Model.extend({

  defaults: function () {
    return {
      videos: new VideosCollection(),
      main_video: false,
    }
  },
  showVideo: function (id) {
    var allVideos = this.get('videos');
    var currentVideo = allVideos.findWhere({ id: id });

    this.set('current_video', currentVideo);
    this.get('current_video', currentVideo);
  }
});
