var VideoCollection = Backbone.Collection.extend({

  initialize: function(models, options) {
    this.query = options.query;
  },

  url: function() {
    return "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video$videoEmbeddable=true&key=AIzaSyBx1hXgYHVu15iL3tVUumBApjWhI41C848&maxResults=5&order=viewCount&q=" + this.query;
  },

  model: VideoModel,

  setQueryAndFetch: function(newQuery) {
    this.query = newQuery;
    this.fetch({reset: true});
  },

  parse: function (response) {
    return response.items.map(function(video) {
      var videoToAdd = {
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail: video.snippet.thumbnails.default.url,
        videoID: video.id.videoId
      };
      return videoToAdd;
    });
  }

});
