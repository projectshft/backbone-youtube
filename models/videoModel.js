var VideoModel = Backbone.Model.extend({
  idAttribute: 'videoId',

  defaults: function () {
    return {
      videoId: '',
      thumbnailUrl: '',
      title: '',
      description: ''
    }
  }
})