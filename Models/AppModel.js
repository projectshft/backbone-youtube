var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection(),
      search: 'dog',
      mainVideo: ''
    }
  },

 
  initialize: function() {
    //set a default search query to be set when the page is first loaded
    this.get('videos').fetchVideos('dogs');
    //when a change is made to the search make a new fetch
    this.listenTo(this, 'change: search', this.fetchVideos);
  },


  fetchVideos: function () {
    this.get('videos').fetchVideos(this.get('search'));
  },

  swapMainAndSideVideo: function(clickedVideoPosition, currentMainVideo) {
    clickedVideoPosition = currentMainVideo;
  },


  setSearch: function (searchQuery) {
    //set the search to the searchQuery
    this.set({'search': searchQuery}) 

    this.get('videos').fetchVideos(this.get('search'));
  },

  setMainVideo: function (video) {
    //set the mainvideo of the appmodel
    this.set({'mainVideo': video})
  }


});


