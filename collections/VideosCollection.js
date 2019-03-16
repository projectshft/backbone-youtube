//extend the Backbone Collection methods to VideosCollection
var VideosCollection = Backbone.Collection.extend({
  // set VideosCollection model to VideoModel
  model: VideoModel,

  fetchData: function(query) {
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${query}&type=video&videoDefinition=high&key=AIzaSyDcydR_2UMVTi4t1f58KHM-HrZ0HyS8MxE`
    this.fetch({ reset: true });
  },
  //define the parse function to retrive the data that we want from what is returned from the server
  parse: function(response) {
    console.log(response.items[0].snippet.title)
    return response.items.map(index => ({
      videoID: index.id.videoId,
      title: index.snippet.title,
      description: index.snippet.description,
      thumbnail: index.snippet.thumbnails.medium.url
    }));
  }
});
