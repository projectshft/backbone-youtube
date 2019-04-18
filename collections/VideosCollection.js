//the VideosCollection will be responsible for the YoutubeAPI
var VideosCollection = Backbone.Collection.extend({
  model: VideoModel,

  fetchAPIData: function(query) {
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${query}&type=video&videoDefinition=high&key=AIzaSyDZpBTnPo92ZA7Tu5MxFZL2u-If5TV2Hs4`
    console.log('the url with the query inserted looks like', this.url)
    this.fetch({ reset: true })
  },

  parse: function(response) {
    return response.items.map(m => ({
      id: m.id.videoId,
      title: m.snippet.title,
      description: m.snippet.description,
      thumbnail: m.snippet.thumbnails.default.url
    }))
  }
})
