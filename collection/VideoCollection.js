var VideoCollection = Backbone.Collection.extend({
  model: VideoModel,
  url: function(searchTerm) {
    console.log("search term: ", searchTerm);
    return 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='+ searchTerm +'&type=video&key='
  },

  parse: function(data) {
    return data.items.map(function (b) {
      return Object.assign({'url': 'https://www.youtube.com/embed/' + b.id.videoId});
    }, this);
  }
});
