var VideoModel = Backbone.Model.extend({

  defaults: {
  id: '',
  videoId: '',
  thumbnail: '',
  title: '',
  description: ''
},

urlRoot: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&videoEmbeddable=true&key=AIzaSyCUFrrY57c0l_8ufglh-bWcqIBJVq21DnE&q=",


parse: function (response) {
  return response.items.map(function (e) {
    return {
      videoId: e.id.videoId,
      thumbnail: e.snippet.thumbnails.default.url,
      title: e.snippet.title,
      description: e.snippet.description
    }
  });
}

});