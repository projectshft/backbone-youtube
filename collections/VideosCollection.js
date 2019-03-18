const VideosCollection = Backbone.Collection.extend({
  // Set initial query value so when we start the program it isn't blank
  query: "backbone js",

  url: function () {
    return `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${this.query}&type=video&key=AIzaSyC7Wz1WhWyeAlxGsF-3mWBbadshGAnhEXg`;
  },

  model: VideoModel,

  // This function will be called from the AppView getSearchQuery method and use the result of the search query to make a GET req to the API

  fetchVideoData: function (query) {
    this.query = query;
    this.fetch();
  },
  // Parse the data to retrieve only the needed data for the VideoModel
  parse: function (response) {
    if (response.items) {
      return response.items.map(function (item) {
        return {
          videoId: item.id.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          thumbnail_url: item.snippet.thumbnails.default.url
        }
      }, this)
    }
  }
});
