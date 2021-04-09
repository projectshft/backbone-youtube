var VideosCollection = Backbone.Collection.extend({
  url: "",
  model: VideoModel,

  parse: function (response) {
    return response.items
  },

  //Fetchs video for search with desired searchTerm
  searchVideos: function (searchTerm, numberOfResults = 5) {
    //set URL on basis of searchTerm
    //If number of results is 1 that means the searchTerm is a single video id and requires a different url
    if(numberOfResults === 1) {
      this.url =`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=${searchTerm}&videoEmbeddable=true&key=AIzaSyBb3LoLeomSw5C9z03DxPqCQhjSm2dbiSU`;
    } else {
      this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${numberOfResults}&q=${searchTerm}&type=video&videoEmbeddable=true&key=AIzaSyBb3LoLeomSw5C9z03DxPqCQhjSm2dbiSU`
    }
    this.fetch();
  }

})