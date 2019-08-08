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

  //use search query to get videos back from API
  fetchVideos: function () {
    
    this.get('videos').fetchVideos(this.get('search'));
  },
  //when the videos clicked, make the main video appear on the sidebar
  swapMainAndSideVideo: function(clickedVideoPosition, currentMainVideo) {
    appModel.get('videos').models[clickedVideoPosition] = currentMainVideo;

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


