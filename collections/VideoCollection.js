var VideoCollection = Backbone.Collection.extend({
  
  model: VideoModel,
  // API key = AIzaSyAIAfyCgGS_8VFCFTlPESDfVbz2sTzwCwM
  searchVideos: function(query){
    this.url = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&q=" +query+ "&key=AIzaSyAwj8d3y9DVmjoxgZMKDLctKBtSdmHoYQE"
    this.fetch({reset:true})
    // console.log("search videos ", query)
  },
  url: '', 
  parse: function(response) {
    return response.items.map(function(data) {
      return {
        title: data.snippet.title,
        description: data.snippet.description,
        videoId: data.id.videoId,
        thumbnails: data.snippet.thumbnails.default.url
      };
    }

  )
  }
});
