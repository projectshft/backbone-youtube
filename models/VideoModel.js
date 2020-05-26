// A model represents a video and its stats. We need to be able to take the form input data and pass the string as
// a new search and parse it into a new VideoModel.

var VideoModel = Backbone.Model.extend({

  //using static link for now to test model

  urlRoot: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=' + {{search-term}} + '&key=AIzaSyDFf_6NTONo5rmGPHmJGMnpLqkXzS8tm7g',


// Creating default attributes to be used in each model instance

  defaults: function () {
    return {
      title: '',
      description: '',
      thumbnail: '',
    }
  }
});
