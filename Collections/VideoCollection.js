// Creates a collection of videos based upon what was searched for

const VideoCollection = Backbone.Collection.extend({
  model: VideoModel,

  /* Generates the URL to pass into the YouTube API based on the query value with a max of 10 results.
     Only returns videos and also attaches the API Key. */
  
  fetchVideos: function (query) {
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}&type=video&key=AIzaSyAaExaRBOtyvu4QxGvJ8mMAwrnEVz_6KsQ`;
    this.fetch({reset: true});
  },

  // Takes the response from the YouTube API, maps over each result and parses out the information we need for the model

  parse: function (response) {
    return response.items.map(video => ({
      id: video.id.videoId,
      title: video.snippet.title,
      description: video.snippet.description,
      thumbnail: video.snippet.thumbnails.default.url
    }));
  }
});
