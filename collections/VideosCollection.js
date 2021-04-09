var VideoCollection = Backbone.Collection.extend({
  model: VideoModel,

  url: function(){
    var searchTerm = appModel.attributes.searchTerm;
    return `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=` + searchTerm + `&type=video&videoEmbeddable=true&key=AIzaSyCnKkdSB1QdOn_3AkNsPK3g291MRJLIIFQ`
  },

  parse: function (response) {
      var responseArray = response.items.map(function(video){
        return {
          title: video.snippet.title,
          description: video.snippet.description,
          videoId: video.id.videoId
        };
      })
      return responseArray
    }
  });
