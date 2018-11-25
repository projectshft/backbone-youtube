var VideoCollection = Backbone.Collection.extend({

  model: VideoModel,

  query: "bohemian+rhapsody+covers",

  url: function() {
      return "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video$videoEmbeddable=true&key=AIzaSyBx1hXgYHVu15iL3tVUumBApjWhI41C848&maxResults=5&order=viewCount&q=" + this.query;
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
