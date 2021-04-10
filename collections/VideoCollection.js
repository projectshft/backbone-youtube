var VideoCollection = Backbone.Collection.extend({
  url: function () {
    return 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&videoEmbeddable=true&key=AIzaSyAmgnkL1fUlbJf0aK-4Y3mzq5Qr5V_p3U4&q=cats'
  },

  model: VideoModel,

  addVideo: function (name, description, video_url, id) {
    this.add({
      name: name,
      description: description,
      video_url: video_url,
      id: id
    })
  },

  parse: function (response) {
    return response.items.map(function (issue) {
      return {
        id: issue.id.videoId,
        name: issue.snippet.title,
        description: issue.snippet.title,
        video_url: issue.snippet.thumbnails.default.url
      }
    })
  },

  initialize: function () {
    this.on('add', function (model) {
      model.fetch();
    })
  }
});

var videos = new VideoCollection();
videos.on('add', function (i) { (i.toJSON()); });
videos.fetch();
