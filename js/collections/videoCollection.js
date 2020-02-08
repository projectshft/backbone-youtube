var VideoCollection = Backbone.Collection.extend({
  url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=kittens&key=AIzaSyB1ObCChpaE7wlCsk8nPAm0E19LL9tsYg4`,

  model: VideoModel,

  updateVideoUrl: function(search) {
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${search}&key=AIzaSyB1ObCChpaE7wlCsk8nPAm0E19LL9tsYg4`
    this.reset()
    appModel.get('videos').fetch({ reset: true })
  },
  parse: function(response) {
    return response.items.map(function(video) {

      return Object.assign({
        'title': video.snippet.title,
        'id': video.id.videoId,
        'thumbnail': video.snippet.thumbnails.default.url,
        'description': video.snippet.description
      });
    }, this);
  }
})
