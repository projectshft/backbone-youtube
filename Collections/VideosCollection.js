//your 5 videos
var VideosCollection = Backbone.Collection.extend({
  model: VideoModel,

  //fetch your videos from the API
  fetchVideos: function(query) {
    this.url = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=AIzaSyDUXvHcn6NsWBtbRD_NWHReDjTPW0S8fz8&q=" + query;
    this.fetch({
      reset: true
    });
  },

  parse: function(response) { 
    return response.items.map(function(data) {
      return {
        videoTitle: data.snippet.title,
        videoDescription: data.snippet.description,
        videoId: data.id.videoId,
        thumbnail: data.snippet.thumbnails.default.url
      };
      })
    }
  });