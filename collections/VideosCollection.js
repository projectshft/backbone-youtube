var VideosCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyDs1nGBAG1-yrRO0hD1WDXC8fwJOw_Qanw&type=video&q=doug%20demuro',

  model: VideoModel,

  // getSearch: function () {
  //
  //
  // },

  parse: function (response) {
    // console.log(response.items)
   return response.items.map(function (video) {
     // console.log(video)
     return {
       title: video.snippet.title,
       description: video.snippet.description,
       thumbnail: video.snippet.thumbnails.default.url,
       videoId: video.id.videoId,
     }
   });
 }

});
