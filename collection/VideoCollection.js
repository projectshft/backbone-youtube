var VideoCollection = Backbone.Collection.extend({
  url: function() {
    return 'https://www.googleapis.com/youtube/v3/search?part=snippet&q='+ appModel.get("searchInput") +'&type=video&key=AIzaSyA0k1YOcWPg-ankR3RMiAsMbN04fVzncOE'
  },

  parse: function(data) {
    return data.items.map(function (b, index) {
      return Object.assign({
        'url': 'https://www.youtube.com/embed/' + b.id.videoId,
        currentVideo: (index == 0 ? true : false), //Logic here is so that the first video is set as the currentVideo to trigger render.
        title: b.snippet.title,
        description: b.snippet.description,
        thumbnail: b.snippet.thumbnails.medium.url,
        id: b.id.videoId
      });
    }, this);
  }

});