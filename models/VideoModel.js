var VideoModel = Backbone.Model.extend({
  idAttribute: 'videoId',

  defaults: {
    videoId: '',
    title: '',
    description: '',
    thumbnail_url: ''
  },

  parse: function (response) {
    return {
      videoId: response.id.videoId,
      title: response.snippet.title,
      description: response.snippet.description,
      thumbnail_url: response.snippet.thumbnails.default.url,
      detail_url: response.snippet.thumbnails.high.url
    }
  }
})