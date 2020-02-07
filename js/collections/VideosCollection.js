var VideosCollection = Backbone.Collection.extend({
  url: "",
  model: VideoModel,
  baseUrl: "https://www.googleapis.com/youtube/v3/search?key=AIzaSyD0OQiHtWN-YGis-Evfym5-lcpHbggsr90&part=snippet&type=video&q=",

  newVideosSearch: function(searchTerm) {
    var newUrl = this.baseUrl + searchTerm
    this.url = newUrl

    if (this.size() != 0 ) {
      for (var i = 0; i < this.size(); i++) {
        this.at(i).destroy()
      }
    }

    this.fetch({ reset: true})
  },

  parse: function(response) {
    return response.items.map(function(item) {
      var id = item.id.videoId
      var title = item.snippet.title
      var thumbnail = item.snippet.thumbnails.default.url
      var description = item.snippet.description

      var newVideo = {
        id: id,
        title: title,
        thumbnail: thumbnail,
        description: description
      }

    return newVideo
  }, this)
  }
})
