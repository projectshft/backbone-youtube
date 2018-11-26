//your 5 videos 
var upNextVideoCollection = Backbone.Collection.extend({
  model: currentlyPlayingVideo,

//fetch your videos from the API
  fetchVideos: function(query) {
    this.url = 'https://www.googleapis.com/youtube/v3/search?&key=AIzaSyDUXvHcn6NsWBtbRD_NWHReDjTPW0S8fz8&part=snippet&chart=mostpopular&type=video&q=' + query;
  },

  parse: function (response) {
    return response.items.map(function (vid){
      return {
        videoTitle: vid.snippet.title,
        videoDescription: vid.snippet.description,
        videoId: vid.id.videoID,
        thumbnail: vid.snippet.thumbnails.default.url
      }
    })
  }
});
