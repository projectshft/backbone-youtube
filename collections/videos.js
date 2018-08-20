//Collection:
//Provide base URL with API key
//View will provide the searchQuery
//Model will listen and append the id

//this URL works for both a query and a specific video
// url: https://www.googleapis.com/youtube/v3/search?key={{your api key}}&part=snippet&type=video&q={{ your search query }}

var query = this.$('#search-input').val();

var VideosCollection = Backbone.Collection.extend({

  model: VideoModel,

  url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyCIF-nV9qLeAriwePo8cTdgHGEuH_VAno0&part=snippet&type=video&q=' + query,

  initialize: function () {

  },

  // getData: function (searchQuery) {
  //   this.url = this.url + searchQuery;
  //   console.log('concatenated URL is: ' + this.url);
  //   return this.url;
  // },

  // when 'reviews' come in from the server, they're an array...
  // this will set them back to being a collection
  parse: function (response) {
    console.log(response);

    var self = this;
    var videoArray = [];

    _.each(response.items, function (item, index) {
      var video = new self.model();

      video.set('videoId', item.id.videoId);
      video.set('title', item.snippet.title);
      video.set('description', item.snippet.description);

      self.push(video);
    });

    console.log('length of this collection: ' + this.length);

    return this.models;
    //
    // for (let i=0; i<searchQuery.items.length; i++) {
    //   var attributes = {
    //     'videoId': searchQuery.items[i].id.videoId,
    //     'title': searchQuery.items[i].snippet.title,
    //     'description': searchQuery.items[i].snippet.description,
    //   };
    //   videoArray.push(attributes);
    // }
    // return videoArray;
  }
});

var videosCollection = new VideosCollection();
// videosCollection.fetch(this.parse);
console.log("initialized a new collection");
