//Define VideosCollection where VideoModels will be created and stored
var VideosCollection = Backbone.Collection.extend({
  //url left blank until a search is entered
  url: "",
  model: VideoModel,
  //Base url will be combined with user search to make the unique api request url
  baseUrl: "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDvl1ZHrr71zPfG2fC9fmw6aBX0fJ70kb4&part=snippet&type=video&q=",

  //Function called when AppModel's searchTerm is changed
    newVideosSearch: function(searchTerm) {
    //Creates a new url by combining baseUrl and the user's search term
    var newUrl = this.baseUrl + searchTerm
    this.url = newUrl

    //If there are VideoModels from a previous search in VideosCollection
    //Clear VideosCollection
    if (this.size() != 0 ) {
      for (var i = 0; i < this.size(); i++) {
        this.at(i).destroy()
      }
    }

    //Run this.fetch with new url from user search
    this.fetch({ reset: true})
  },

  //For each video result from the youtube api
  //Retrieve videoId, title, thumbnail and description
  //And make a new VieoModel with the data
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
