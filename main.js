var VideosModel = Backbone.Model.extend({
  defaults: {
    title: 'Best Funny DOG Videos Compilation!',
    description: 'Compilation of Funny DOG Videos!',
    thumbnails: 'https://i.ytimg.com/vi/d3c7gAR5iOM/mqdefault.jpg',
    videoId: 'd3c7gAR5iOM'
  }
});

var VideosCollection = Backbone.Collection.extend({
  url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=dogs&type=video&videoEmbeddable=true&key=AIzaSyDJP_kbSFYteTAEL6Dao64hwbagEOuZT_c",
 });
 
var VideosView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .btn': 'displayVideos'
  },

  initialize: function () {
    this.listenTo(this.collection, 'reset', function () {
      this.renderMainVideo();
      this.renderSideVideos();
   })
  },

  displayVideos: function () {
    /console.log('click');
   
  }


});

var videosView = new VideosView({ model: VideosModel });

var videosCollection = new VideosCollection({ model: VideosModel });
videosCollection.fetch() 