var AppModel = Backbone.Model.extend({

  defaults: function () {
    return {
      videos: new VideosCollection(),
      current_video: null
    }
  },

  initialize: function () {
    this.listenTo(this.get('videos'), 'reset', this.setCurrentVideo);
  },

  setCurrentVideo: function(videoId) {
    var allVideos = this.get('videos');
    var currentVideo;

    if (videoId === "") {
      currentVideo = allVideos.at(0);
    } else {
      currentVideo = allVideos.findWhere({ videoId: videoId });
    }

    this.set('current_video', currentVideo);
    alert(this.get('current_video'));
  },

});
