var VideoModel = Backbone.Model.extend({
  defaults: function () {
    return {
      id: null,
      title: '',
      description: '',
      video_url: '',
      thumbnail_url: ''
    }
  }
});
