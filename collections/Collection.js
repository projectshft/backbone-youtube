var VideoCollection = Backbone.Collection.extend({
  url: '',

  model: VideoModel,

  setUrl: function (query) {
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&type=video&videoEmbeddable=true&key=AIzaSyBKne27xN5AjVzSaQLMS9d3nNz469DDVDA`;
  },

  parse: function (response) {
    return response.items.map(function (video) {
      return {
        id: video.id.videoId,
        title: video.snippet.title,
        description: video.snippet.description,
        thumb: video.snippet.thumbnails.default.url
      }
    }); 
  }
}) 