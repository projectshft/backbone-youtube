var VideosCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=surfing&key=AIzaSyDf8svlqVOB7m84ymG7sTifARWuBKR24_Y',

  model: VideoModel,

  // parse: function(resource) {
  //   return resource.items.map(function (item) {
  // 
  //
  //     return Object.assign({
  //       'title': item.snippet.title,
  //       'description': item.snippet.description,
  //       'src': item.snippet.thumbnails.default.url}, item);
  //   }, this);
  // }
});
