// Creates a collection of videos based upon what was searched for

const VideoCollection = Backbone.Collection.extend({
  model: VideoModel,

  /* Generates the URL to pass into the YouTube API based on the query value with a max of 10 results.
     Only returns videos and also attaches the API Key. */
  
  fetchVideos: function (query) {
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=8&q=${query}&type=video&key=AIzaSyAaExaRBOtyvu4QxGvJ8mMAwrnEVz_6KsQ`;
    this.fetch({reset: true});
  },

  /* Takes the response from the YouTube API, if there are any search results it maps over 
     each result and parses out the information we need for the model. If there are no search results
     it alerts the user and sets the page back to the default query */

  parse: function (response) {
    if(response.items[0]) {
      return response.items.map(video => ({
        id: video.id.videoId,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail: video.snippet.thumbnails.medium.url
      }));
    } else {
      alert('Your search returned zero results');
      location.reload();
    }
  }
});
