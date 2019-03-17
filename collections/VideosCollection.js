//extend the Backbone Collection methods to VideosCollection
var VideosCollection = Backbone.Collection.extend({
  fetchData: function(query) {
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${query}&type=video&videoDefinition=high&key=AIzaSyDcydR_2UMVTi4t1f58KHM-HrZ0HyS8MxE`
    this.fetch({ reset: true });
  },
  //define the parse function to retrive the data that we want from what is returned from the server
  parse: function(response) {
    if(response.items[0] === undefined){
      alert('No results. Please try your search again.');
    } 
    return response.items.map(function(index){
      return {
        videoID: index.id.videoId,
        title: index.snippet.title,
        description: index.snippet.description
      }
    });
  },
});
