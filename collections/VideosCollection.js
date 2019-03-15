var VideosCollection = Backbone.Collection.extend({

  /* 
    Should we be calling this function every time the user clicks the search button???
    Do we have to call this function in the AppView??? or???
    pls help thx
  */
  url: function () {
    return `https://www.googleapis.com/youtube/v3/search?part=id&q=${this.options.userInput}&type=video&key=AIzaSyD79hskr75Fwx5ZLAWOAEe8o2NNOgaS3uM`;
  },

  initialize: function (models, options) {
    this.options = options;
  },

  model: VideoModel,

  parse: function (response) {
    console.log('response: ', response);
  }
});