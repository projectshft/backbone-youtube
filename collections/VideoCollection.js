

var VideoCollection = Backbone.Collection.extend({

  model: VideoModel,
  // API key = AIzaSyAIAfyCgGS_8VFCFTlPESDfVbz2sTzwCwM
  fetch: function(query){
    this.url = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=AIzaSyAIAfyCgGS_8VFCFTlPESDfVbz2sTzwCwM=" + query;
    this.fetch({reset:true})
  },

  // data needed... title, desc, videoID, thumbnail
  parse: function(response) {
    return response.items.map(function(data) {
      return {
        videoTitle: data.snippet.title,
        videoDescription: data.snippet.description,
        videoID: data.id.videoId,
        thumbnail: data.snippet.thumbnails.default.url
      };
    }

  )
  }
});
