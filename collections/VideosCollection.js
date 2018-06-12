var VideosCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search',

  model: VideoModel,

  // currentVideo:

  parse: function(response) {
    return response.items;
  }

  // getVideoWithQuery
});
