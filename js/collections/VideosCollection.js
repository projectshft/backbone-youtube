// js/views/VideosCollection.js
// Videos Collection will fetch videos from the Youtube API


var VideosCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyD0EafJFEfzx7pWml4jkg9kLbdRJT0sFnM&part=snippet&type=video&q=cats',

  // defaults: {
  //   q_value : '',
  // },

  parse: function (response, options) {
    debugger;
  }

});
var videos = new VideosCollection();

videos.fetch();
