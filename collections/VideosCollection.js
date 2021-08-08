var VideosCollection = Backbone.Collection.extend({

  query: '',

  url: function () {
    return 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q='+this.query+'&type=video&videoEmbeddable=true&key=AIzaSyD9UEtFA4Dv9Wu8szG6bynY9KA-EthTIEg'
  },

  model: VideoModel,

  parse: function (response) {
    return response.items.map(function (vid) {
      return {
        id: vid.id.videoId,
        title: vid.snippet.title,
        description: vid.snippet.description,
        thumbnailUrl: vid.snippet.thumbnails.default.url
      }
    })
  },

  updateQuery: function (updatedQuery) {
    this.query = updatedQuery;
  }
});