var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      videos: new VideoCollection(),

      current_video: null

    }
  },

    changeCurrentVideo: function (id) {
    // make sure our id is a number

    var allVideos = this.get('videos');

    var currentVideo = allVideos.findWhere({ id: id });
    this.set('current_video', currentVideo);
    this.get('videos').updateVideoUrl(id);
  },

})
