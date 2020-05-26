//collection of video models
var VideosCollection = Backbone.Collection.extend({

  // hardcoded url that goes to youtube API
  // url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=puppies&key=AIzaSyDp1E_LCUqIhb7qNApE8R6NToPSrQ1HOEw',


  // url put in as a function where the search criteria is passed in as an argument
  url: function () {
    return 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q='+search+'&key=AIzaSyDp1E_LCUqIhb7qNApE8R6NToPSrQ1HOEw';
  },


  model: VideoModel,

  // changes the format of the data returned from the API
  parse: function (response) {
    return response.items.map(function (items) {
      return {
        id: items.id.videoId,
        videoId: items.id.videoId,
        title: items.snippet.title,
        description: items.snippet.description,
        thumbnails: items.snippet.thumbnails.default.url
      }
    });
  },

});
