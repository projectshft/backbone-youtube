var VideosCollection = Backbone.Collection.extend({
  model: VideoModel,
  searchQuery: 'messi',

  url: function () {
    var API_KEY = 'AIzaSyCqQlZuTXimvUPBonzTn4MXjQNJouPJQcc';
    return `https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${this.searchQuery}&type=video&key=${API_KEY}`;
  },


  fetchVideos: function (userInput) {
    this.searchQuery = userInput;
    this.fetch({ reset: true });
  },

  parse: function (response) {
    var res = response.items.map(function (video) {
      return {
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail: video.snippet.thumbnails.high.url,
        id: video.id.videoId
      }
    });

    return res;
  }
});