var VideosCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyB7jFifvq0RkhIMm-Ni2YaimcO9BNTwU24&type=video&q=doug%20demuro',
  model: VideoModel,

  parse: function (response) {
   return response.map(function (issue) {
     return {
       title: '',
       description: '',
       thumbnail: '',
       video: '',
     }
   });
 }

});
