var VideosCollection = Backbone.Collection.extend({
  url: ' https://www.googleapis.com/youtube/v3/videos?id=7lCDEYXw3mM&key=AIzaSyA7g39h3EESAB4anzZSQxG9z0MsLM-U7c0',
  model: VideoModel,


  parse: function (response) {
    return response.map.items}
      
    

});
