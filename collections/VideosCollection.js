var VideosCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=puppies&key=AIzaSyBevKjuQ6cbwpJb0v_xmvcfJZMi4E4vJuE',

  model: VideoModel,

  updateUrl: function (query) {
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&key=AIzaSyBevKjuQ6cbwpJb0v_xmvcfJZMi4E4vJuE`
    appModel.get('videos').fetch({
      reset: true,
      error: (function() {
        alert('Error. Unable to complete request.');
      })
    })
  },

  parse: function(response) {
    return response.items.map(function(videoInfo) {

      return Object.assign({
        'title': videoInfo.snippet.title,
        'description': videoInfo.snippet.description,
        'thumbnail': videoInfo.snippet.thumbnails.default.url,
        'id': videoInfo.id.videoId
      })
    }, this)
  }
});
