var VideosCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=&key=AIzaSyBIJ3L4QiRWFVpaDMZSo6_bINSaYuyjj5U',

  model: VideoModel,

  updateUrl: function (query) {
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&key=AIzaSyBIJ3L4QiRWFVpaDMZSo6_bINSaYuyjj5U`
    appModel.get('videos').fetch({ reset: true });
  },

  parse: function(response) {
    return response.items.map(function(videoInfo) {

    return Object.assign({'title': videoInfo.snippet.title, 'description': videoInfo.snippet.description,
      'thumbnail': videoInfo.snippet.thumbnails.default.url, 'id': videoInfo.id.videoId});
    }, this);
  }
});
