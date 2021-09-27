var VideoModel = Backbone.Model.extend({
  idAttribute: 'videoId',

  defaults: function () {
    return {
      videoId: null,
      title: '',
      description: '',
      thumbnail_url: ''
    }
  }
});