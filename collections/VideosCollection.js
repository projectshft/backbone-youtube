var VideosCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDs1nGBAG1-yrRO0hD1WDXC8fwJOw_Qanw&type=video&q=doug%20demuro',

  model: VideoModel,

  // getSearch: function () {
  //
  //
  // },

  parse: function (response) {
   return response.map(function (video) {
     return {
       title: '',
       description: '',
       thumbnail: '',
       videoId: '',
     }
   });
 }

});
