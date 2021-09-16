var VideosCollection = Backbone.Collection.extend({
  url: '',
  model: VideoModel,

  fetchVideos: function (query) {
    this.url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=' + query + '&type=video&videoEmbeddable=true&key=AIzaSyArC6FajpyBm0rlovk5duwNlrAXZsk-FlU';
    // this.url = 'http://127.0.0.1:8080/youtube-example.html';
    this.fetch({ reset: true });
  },

  parse: function (response) {
    // console.log(response);
    return response.items.map(function (video) {
      return {
        id: video.id.videoId,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnailURL: video.snippet.thumbnails.medium.url
      };
    });
  },

});
