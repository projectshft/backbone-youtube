var VideosCollection = Backbone.Collection.extend({
  input: 'messi',
  model: VideoModel,

  url: function () {
    var API_KEY = 'AIzaSyD4-EOCD6jM_xqY9ylUWM97jSyau__jzaQ';
    return `https://www.googleapis.com/youtube/v3/search?part=id,snippet&q=${this.input}&type=video&key=${API_KEY}`;
  },


  fetchVideos: function (userInput) {
    this.input = userInput;
    this.fetch({ reset: true });
  },

  parse: function (response) {
    console.log(response);
    var res = response.items.map(function (video) {
      return {
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail: video.snippet.thumbnails.high,
        id: video.id.videoId
      }
    });

    return res;
  }
});