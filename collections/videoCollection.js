var VideoCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=searchQuery&type=video&videoEmbeddable=true&key=',

  model: VideoModel,

  parse: function (response) {
    return response.items.map( function (video) {
      return {
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail: video.snippet.thumbnails.default.url,
        videoId: video.id.videoId
      }
    })
  },
  
  searchYoutube: function (searchQuery) {
    this.url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=' + searchQuery + '&type=video&videoEmbeddable=true&key=' +apiKey;
    this.fetch({reset: true})
  }
})