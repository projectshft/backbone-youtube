const VideoModel = Backbone.Model.extend({
  defaults() {
    return {
      title: '',
      thumbnail: '',
      description: '',
      videoId: '',
    };
  },
});
