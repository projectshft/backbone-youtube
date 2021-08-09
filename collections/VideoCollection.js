var key = 'AIzaSyAPYWVgR_Q5sELYDsNvyPsUWdZnjZIrBRM';
var VideoCollection = Backbone.Collection.extend({
  model: VideoModel,
 
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&videoEmbeddable=true&key=' + key,

 parse: function(response) {
   return response.items.map(function (video){
     return {
      id: video.id.videoId,
      title: video.snippet.title,
      text: video.snippet.description,
      thumb: video.snippet.thumbnails.default
     }
   })
 }

  
});