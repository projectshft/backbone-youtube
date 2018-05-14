var VideosCollection = Backbone.Collection.extend({
url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=' + config.MY_KEY + '&',
  model: VideoModel,

  parse: function(response) {
    return response.items;
  }
});
