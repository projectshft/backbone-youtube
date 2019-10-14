var VideosCollection = Backbone.Model.extend({

  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=' + 'new+england+patriots+cheat' + '&type=video&key=AIzaSyC3YemB3l6du25eOAiAxz1CjaFtCgq1wxw',
  model: VideoModel,

  parse: function(apiresponse) {

    var searchResults = apiresponse.items.map(function(video) {
      return {
        id: video.id.videoId,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail: video.snippet.thumbnails.defaulturl
      }
      console.log(searchResults);
    })
    appModel.get('videos').reset(searchResults)
  },

  fetchVids: function() {
    this.fetch({
      reset: true
    })
  }
});
