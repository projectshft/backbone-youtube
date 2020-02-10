var VideosCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=durham&key=AIzaSyBevKjuQ6cbwpJb0v_xmvcfJZMi4E4vJuE',

  model: VideoModel,

  updateUrl: function (query) {
// passes the search input in as the query, populates the new url and
// fetches the data from the server
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&key=AIzaSyBevKjuQ6cbwpJb0v_xmvcfJZMi4E4vJuE`
    appModel.get('videos').fetch({
      reset: true,
// if there is an error with the request alert the user
      error: (function() {
        alert('Error. Unable to complete request.');
      })
    })
  },

  parse: function(response) {
    return response.items.map(function(videoInfo) {
// parse the response from the server and assign the information needed to
// its corresponding attribute
      return Object.assign({
        'title': videoInfo.snippet.title,
        'description': videoInfo.snippet.description,
        'thumbnail': videoInfo.snippet.thumbnails.default.url,
        'id': videoInfo.id.videoId
      })
    }, this)
  }
});
