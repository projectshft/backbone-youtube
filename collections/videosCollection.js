var VideosCollection = Backbone.Collection.extend({
  url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=kittens&key=AIzaSyD9a8mfFIJuCZwzS57LwDG7OBrL3FX-VlE`,

  model: VideoModel,

  updateVideoURL: function(query) {
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&key=AIzaSyD9a8mfFIJuCZwzS57LwDG7OBrL3FX-VlE`
  },

  parse: function(response) {
    return response.items.map(function(video) {

      return Object.assign({
        'title': video.snippet.title,
        'description': video.snippet.description,
        'thumbnail': video.snippet.thumbnails.default.url,
        'id': video.id.videoId
      });
    }, this);
  }


});
