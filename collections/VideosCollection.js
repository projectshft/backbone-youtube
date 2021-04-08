var VideosCollection = Backbone.Collection.extend({
  url: "",
  model: VideoModel,

  parse: function (response) {
    return response.items
  },

  //Fetchs video for search with desired searchTerm
  searchVideos: function (searchTerm) {
    //set URL on basis of searchTerm
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchTerm}&type=video&videoEmbeddable=true&key=AIzaSyBb3LoLeomSw5C9z03DxPqCQhjSm2dbiSU`
    this.fetch();
  }

})