var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      videos: new VideosCollection(),

      current_video: null,

      url:'',

      // either true or false
      //show_reviews: false
    };
  },

  //update the url with the new search query
  searchYouTube: function(inputSearch) {
    //console.log('from the searchYouTube: ', inputSearch)
    this.set('url', `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDszqXVIWTFfliJkuimJHDCj2uTcJi6Yn0&part=snippet&type=video&maxResults=5&q=${inputSearch}`);
  },

  showVideos: function (id) {
    // make sure our id is a number

    var allVideos = this.get('videos');

    var currentVideo = allVideos.findWhere({ id: id });
    this.set('current_video', currentVideo);
  },

});