var VideosModel = Backbone.Model.extend({


//   // title: 'Best Funny DOG Videos Compilation!',
//   // description: 'Compilation of Funny DOG Videos!',
//   // thumbnails: 'https://i.ytimg.com/vi/d3c7gAR5iOM/mqdefault.jpg',
//   // videoId: 'd3c7gAR5iOM'
// });


//   var VideosCollection = Backbone.Collection.extend({
//     model: VideosModel,
//     url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=dogs&type=video&videoEmbeddable=true&key=AIzaSyDJP_kbSFYteTAEL6Dao64hwbagEOuZT_c",
 });
 
var VideosView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .btn': 'displayVideos'
  },

  initialize: function () {
    // VideosView.listenTo(this.model.get('videosCollection'), 'reset', function () {
    //   this.renderMainVideo();
    //   this.renderSideVideos();
    // }, this);
   },

  displayVideos: function () {
    console.log('click');
   
  }


});

var videosView = new VideosView();
