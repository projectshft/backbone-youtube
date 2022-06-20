const ApplicationModel = Backbone.Model.extend({
  defaults() {
    return {
      videos: new VideoCollection(),

      current_video: null,
    };
  },

  updateCurrentVideo(videoId) {
    const currentVideo = this.get('videos').findWhere({ videoId });
    console.log(currentVideo, 'current Video');
    this.set('current_video', currentVideo);
  },
});
