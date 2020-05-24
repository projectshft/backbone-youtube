// var VideoCollection = Backbone.Collection.extend({
//
//   model: VideoModel,
//
//   initialize: function(options) {
//     if (options.query)
//       this.query = options.query;
//   },
//
//   // Hardcoded for now
//   url: function() { // put query in here eventually
//     return "https://www.googleapis.com/youtube/v3/search?part=snippet&fields=(items(id(videoId),%20snippet(title,%20description,%20thumbnails(default(url)))))&type=video&videoDefinition=high&key=AIzaSyAjINmhXdmMZYEUkFpxJ-MVWSH1iHkqlDY&q=number%three%20they%20might%20be%20giants" // + this.query;
//   },
//
//   parse: function(response) {
//
//     // Getting all the relevant attributes from each item in the Object
//     // returned by the API
//     return response.items.map(function(item) {
//       return Object.assign({
//         'videoId': item.id.videoId,
//         'title': item.snippet.title,
//         'description': item.snippet.description,
//         'thumbnail': item.snippet.thumbnails.default.url
//       }, item);
//     }, this);
//
//   },
//
//   // I'm not sure if this is necessary
//   addVideo: function(videoId, title, description, thumbnail) {
//     this.add({
//       videoId: videoId,
//       title: title,
//       description: description,
//       thumbnail: thumbnail
//     });
//   },
//
//   // reset: I need reset
//
// });
