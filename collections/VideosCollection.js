var VideosCollection = Backbone.Collection.extend({

  // Hardcoded for now
  url: "https://www.googleapis.com/youtube/v3/search?part=snippet&fields=(items(id(videoId),%20snippet(title,%20description,%20thumbnails(default(url)))))&type=video&videoDefinition=high&key=AIzaSyBgqzJ4G-25DjR9dMXpWYz07hlCxDrtpwM&q=number%three%20they%20might%20be%20giants",

  model: VideoModel,

  initialize: function() {
    this.fetch({reset: true});
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
