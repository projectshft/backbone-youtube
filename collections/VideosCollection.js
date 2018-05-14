var VideosCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search',
  model: VideoModel,

  parse: function(response) {
    return response.items;
  }
});
