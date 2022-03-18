var VideoModel = Backbone.Model.extend({
defaults: {
  videoId: '',
  thumbnail: '',
  title: '',
  description: ''
},

urlRoot: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&videoEmbeddable=true&key=AIzaSyADSKbyZhQ9S8rj3F3G_3Ihz0L2BRcqQLQ&q=",

// parse: function (response) {
//   var array = response.items
//   return {
//     id: response.etag,
//     // thumbnail: response.items.snippet.thumbnails.default.url,
//     // title: response.items.snippet.title,
//     // description: response.items.snippet.description
//   },
parse: function (response) {
  // var array = 
  return response.items.map(function (issues) {
    return {
      videoId: issues.id.videoId,
      thumbnail: issues.snippet.thumbnails.default.url,
      title: issues.snippet.title,
      description: issues.snippet.description
    }
  });
}

});