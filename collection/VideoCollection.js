var VideoCollection = Backbone.Collection.extend({
  model: VideoModel,
  url: function(searchTerm) {
    //console.log("search term: ", searchTerm);
    return "asdf"//'https://www.googleapis.com/youtube/v3/search?part=snippet&q='+ searchTerm +''
  },
  
  parse: function(data) {
    return data.items.map(function (b, index) {
      return Object.assign({
        'url': 'https://www.youtube.com/embed/' + b.id.videoId,
        currentVideo: (index == 0 ? true : false)
      });
    }, this);
  },

});