var VideosCollection = Backbone.Collection.extend({
  model: VideoModel,
  searchQuery: 'neymar',

  url: function () {
    var API_KEY = 'AIzaSyBX3-vatGIHQnsKOgYyoPgvlokdh8feslI';
    return `https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${this.searchQuery}&type=video&key=${API_KEY}`;
  },


  fetchVideos: function (userInput) {
    this.searchQuery = userInput;
    this.fetch({ reset: true });
  },

  parse: function (response) {
    var formattedResponse = response.items.map(function (video) {
      return {
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail: video.snippet.thumbnails.high.url,
        id: video.id.videoId
      }
    });

    return formattedResponse;
  }
});