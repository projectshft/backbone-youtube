var VideosCollection = Backbone.Collection.extend({

  model: VideoModel,

  initialize: function(options) {
    if (options.query)
      this.query = options.query;
  },

  url: function() {
    return "https://www.googleapis.com/youtube/v3/search?part=snippet&fields=(items(id(videoId),%20snippet(title,%20description,%20thumbnails(default(url)))))&type=video&videoDefinition=high&key=AIzaSyA8bJOW1EiG4b0QCPxHGRbXX2oqL4tABck&q=" + this.query;
  },


  parse: function(response) {

    return response.items.map(function(item) {
      return Object.assign({
        'videoId': item.id.videoId,
        'title': item.snippet.title,
        'description': item.snippet.description,
        'thumbnail': item.snippet.thumbnails.default.url
      });

    }, this);

  }

});
