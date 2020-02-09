var VideosCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=backbonetutorial&key=AIzaSyBIJ3L4QiRWFVpaDMZSo6_bINSaYuyjj5U',

  model: VideoModel,

  updateUrl: function (query) {
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&key=AIzaSyBIJ3L4QiRWFVpaDMZSo6_bINSaYuyjj5U`
    appModel.get('videos').fetch({
      reset: true,
      success: (function() {
        alert('Success! Enjoy the videos :)');
      }),
      error: (function(e) {
        alert('Error. Unable to complete request:' + e);
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
