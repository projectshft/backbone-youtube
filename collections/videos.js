//Collection:
//Provide base URL with API key
//View will provide the searchQuery
//Model will listen and append the id

//this URL works for both a query and a specific video
// url: https://www.googleapis.com/youtube/v3/search?key={{your api key}}&part=snippet&type=video&q={{ your search query }}

var VideosCollection = Backbone.Collection.extend({

  url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCIF-nV9qLeAriwePo8cTdgHGEuH_VAno0&part=snippet&type=video&q=',
  model: VideoModel,

  initialize: function () {
    this.on('clickedInMyView', this.wasClicked, this);
  },

  getData: function (searchQuery) {
    this.url = this.url + searchQuery;
    console.log('concatenated URL is: ' + this.url);
  },

  wasClicked: function() {
    console.log('One of my models was clicked in the DOM!')
  }

});

var videosCollection = new VideosCollection();
console.log("initialized a new collection");
