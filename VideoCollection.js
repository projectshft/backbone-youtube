var VideoCollection = Backbone.Collection.extend({

  model: VideoModel,

  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&type=video&videoDefinition=high&key=AIzaSyAjINmhXdmMZYEUkFpxJ-MVWSH1iHkqlDY',

  initialize: function(options) {
    if (options.query)
      this.query = options.query;
  },

  // Hardcoded for now
  url: function() {
    return "https://www.googleapis.com/youtube/v3/search?part=snippet&fields=(items(id(videoId),%20snippet(title,%20description,%20thumbnails(default(url)))))&order=viewCount&type=video&videoDefinition=high&key=AIzaSyAjINmhXdmMZYEUkFpxJ-MVWSH1iHkqlDY&q=fingertips%20fire%20they%20might%20be%20giants" // + this.query;
  },

  parse: function(response) {


    return response.map(function(item) {


      return Object.assign({'id': item._id}, b);
    }, this);
  }

  addVideo: function(videoId, title, description, thumbnail) {
    this.add({
      videoId: '', // data.items.id.videoId
      title: '', // data.items.snippet.title
      description: '', // data.items.snippet.description
      thumbnail: '' // data.items.snippet.thumbnails.default.url
    });
  },

});
