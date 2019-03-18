var VideoCollection = Backbone.Collection.extend({

  model: VideoModel,

  getVideos: function(query) {

    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=AIzaSyA3J9kaPqKWfTOk6buExB0aZGcgvSxSEh4&q=${query}`;

    this.fetch({ reset: true });
  },

  //override the parse function to access the desired data
  parse: function (response) {
    //use the map array helper function to create an array of objects by looping through the original JSON data
    var result = response.items.map(function(data) {
      return {
        title: data.snippet.title,
        desc: data.snippet.description,
        thumbnail: data.snippet.thumbnails.default.url,
        videoId: data.id.videoId
      }
    })
    return result;
  }
});
