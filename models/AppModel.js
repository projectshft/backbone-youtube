var AppModel = Backbone.Model.extend({

  defaults: function () {
    return {
      videos: new VideosCollection(),
      current_video_index: 0,
    }
  },

  setCurrentVideo: function (videoId) {
    var allVideos = this.get('videos');
    var currentVideo = allVideos.indexOf(allVideos.findWhere({ videoId: videoId })); // I need to figure out id
    this.set('current_video_index', currentVideo);
    alert(this.get('current_video_index'));
  },

});
