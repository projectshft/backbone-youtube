var VideoCollection = Backbone.Collection.extend({

  model: VideoModel,

  initialize: function(options) {
    if (options.query)
      this.query = options.query;
  },

  // Hardcoded for now
  url: "https://www.googleapis.com/youtube/v3/search?part=snippet&fields=(items(id(videoId),%20snippet(title,%20description,%20thumbnails(default))))&type=video&videoDefinition=high&key=AIzaSyAjINmhXdmMZYEUkFpxJ-MVWSH1iHkqlDY&q=number%three%20they%20might%20be%20giants",

  parse: function(response) {

    console.log(response);
    // Getting all the relevant attributes from each item in the Object
    // returned by the API
    return response.items.map(function(item) {
      return Object.assign({
        'videoId': item.id.videoId,
        'title': item.snippet.title,
        'description': item.snippet.description,
        'thumbnail': item.snippet.thumbnails.default.url
      }, item);
    }, this);

  }

  // reset: I need reset

});
