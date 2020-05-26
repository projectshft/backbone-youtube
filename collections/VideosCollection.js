var VideosCollection = Backbone.Collection.extend({

  model: VideoModel,

  // If options are passed in,
  // set the collection's query property
  // to the passed query. Used below in url.
  initialize: function(options) {
    if (options.query)
      this.query = options.query;
  },

  // Using YouTube's API parameters to only get videoId, title, description,
  // and thumbnail.
  url: function() {
    return "https://www.googleapis.com/youtube/v3/search?part=snippet&fields=(items(id(videoId),%20snippet(title,%20description,%20thumbnails(default(url)))))&type=video&videoDefinition=high&key=AIzaSyA8bJOW1EiG4b0QCPxHGRbXX2oqL4tABck&q=" + this.query;
  },


  // Parsing results to remove nested key-value pairs
  // in the returned API results.
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
