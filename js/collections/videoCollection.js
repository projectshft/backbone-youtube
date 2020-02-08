var VideoCollection = Backbone.Collection.extend({
  //default url so there is videos when page loads
  url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=puppies&key=AIzaSyB1ObCChpaE7wlCsk8nPAm0E19LL9tsYg4`,

  model: VideoModel,
//recieves the search data from the input and updates the url with the new query
  updateVideoUrl: function(search) {
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${search}&key=AIzaSyB1ObCChpaE7wlCsk8nPAm0E19LL9tsYg4`
    this.reset()
    appModel.get('videos').fetch({ reset: true })
  },
  //parses function to only return desired fields
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
