var VideoModel = Backbone.Model.extend({
  defaults: {
      id: '',
      title: '',
      description: '',
      thumbnailUrl: '',
      videoUrl: 'https://www.youtube.com/embed/'
  },

  parse: function (response) {
    return {
      id: response.id.videoId,
      title: response.snippet.title,
      description: response.snippet.description,
      thumbnailUrl: response.snippet.thumbnails.default.url,
      videoUrl: `https://www.youtube.com/embed/${response.id.videoId}`,
    }
  }
  
});