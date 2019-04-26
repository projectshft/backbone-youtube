const VideosCollection = Backbone.Collection.extend({
  model: VideoModel,

  url:
    'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&key=AIzaSyC1DH9BN1VRBoNennrDZXAVqLGr_1xz7_8',

  /**************
   * getVideos
   **************/
  getVideos: function(query) {
    // Set url for fetch request to youTube API endpoint
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&key=AIzaSyC1DH9BN1VRBoNennrDZXAVqLGr_1xz7_8&q=${query}`;
    console.log('Url with query is: ', this.url);
    this.fetch({ reset: true });
  },

  parse: function(response) {
    return response.items.map(function(item) {
      return {
        videoId: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail: item.snippet.thumbnails.default.url
      };
    });
  }
});
