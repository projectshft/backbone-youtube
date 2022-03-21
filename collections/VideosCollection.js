var VideosCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=cats&type=video&videoEmbeddable=true&key=AIzaSyCpt4vJLxO4DGPiAiZkkZE-JfHIOrYEHcE',
  
  model: VideoModel,

  parse: function (response) {
    return response.items
  },

  updateUrl: function (query) {
    this.url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=' + query + '&type=video&videoEmbeddable=true&key=AIzaSyCpt4vJLxO4DGPiAiZkkZE-JfHIOrYEHcE';
    this.fetch();
  }
})