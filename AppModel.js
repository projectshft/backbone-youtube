var AppModel = Backbone.Model.extend({

  defaults: function () {
    return {
      videos: new VideoCollection(),
      current_video: null,
    }
  },

  showCurrentVideo: function (videoId) {
    var allVideos = this.get('videos');
    var currentVideo = allVideos.findWhere({ videoId: videoId }); // I need to figure out id
    this.set('current_video', currentVideo);
  },

});
