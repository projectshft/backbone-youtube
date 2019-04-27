const VideoModel = Backbone.Model.extend({
  defaults: function() {
    return {
      videoId: '',
      title: '',
      description: '',
      thumbnail: ''
    };
  }
});
