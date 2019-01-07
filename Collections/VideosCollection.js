//your 5 videos
var VideosCollection = Backbone.Collection.extend({
  model: VideoModel,

  //fetch your videos from the API
  fetchVideos: function(query) {
    this.url = 'https://www.googleapis.com/youtube/v3/search?&key=AIzaSyDUXvHcn6NsWBtbRD_NWHReDjTPW0S8fz8&part=snippet&chart=mostpopular&type=video&q=' + query;
    this.fetch({
      reset: true
    });
  },

  parse: function(response) {
    return response.items.map(function(vid) {
      return {
        videoTitle: vid.snippet.title,
        videoDescription: vid.snippet.description,
        videoId: vid.id.videoId,
        thumbnail: vid.snippet.thumbnails.default.url
      }
    })
    return result;
  }
});
