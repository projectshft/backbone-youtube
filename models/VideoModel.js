var VideoModel = Backbone.Model.extend({
  defaults: function() {
    return {
      videoId: '',
      videoThumbnail: '',
      title: '',
      description: '',
    }
  },
});