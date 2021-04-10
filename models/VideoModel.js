var VideoModel = Backbone.Model.extend({
  defaults: function () {
    return {
      id: null,
      name: '',
      description: '',
      video_url: ''
    }
  }
});