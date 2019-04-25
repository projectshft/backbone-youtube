const VideoModel = Backbone.Model.extend({
  // OVERRIDES: id
  // Per YouTube API documentation: JSON response returns an id(#id) object with 4 key-value pairs. Limit response to only vidoes, not channels nor playlists, by using only id.videoId attribute (a string). (SHOULD "KIND" ALSO BE USED/CHECKED TO ENSURE ONLY VIDEOS???) If the id.type property's value is "youtube#video" (CHECK FOR THIS? IMPOSE LIMITATIONS TO ALLOW ONLY THIS???) then this property will be present and its value will contain YouTub's unique identifer for a video that mathces the search query.

  // Per Backbone documentation:
  //  * "id" will be coppied onto the model as a direct property.
  //  * "idAttribute" stores a model's unique identifier. For direct communication (with YouTube API) which uses a unique identifier, you can set a model's idAttribute to transparently map from that key to id.
  // *  "cid" is a unique identifier automatically assigned to all models when they're first created... handy when the model has not yet been saved to the server, and does not yet have its eventual true id, but already needs to be visible in the UI

  // Use idAttribute first, following sample code in Backbone documentation (p. 9). cid might be possible, even preferrable for this limited use, but it's likely not as robust for long-term design or bigger design with more functionality???

  idAttribute: '_id', // "id.videoID"????

  defaults: function() {
    return {
      // kind: '', // Include kind to test (maybe for edge cases)
      videoId: '',
      title: '',
      description: '',
      thumbnail: '' // thumbnail url?
      // For extension: insert nextFiveVideos: new VideosCollection()???
    };
  }
  // },
  // OR
  // initialize: function(video) {
  //   this.set('id', video.id.videoId);
  //   this.set('snippet', video.snippet); // just take everything the whole snippet attribute shebang?
  // },

  // parse: function(item) {
  //   return {
  //     // include kind here, if above // also, is that portion of the url necessary/helpful to store here
  //     videoId: item.id.videoId,
  //     title: item.snippet.title,
  //     description: item.snippet.description,
  //     thumbnail: item.snippet.thumbnails.default.url
  //     // See YT api documentation re: thumbnails: returns an object. Need to specify item.snippet.thumbnails.default? url? Seems redundant.
  //   };
  //   // return item.results; ?
  // }
});

// var VideoModel = Backbone.Model.extend({
//   //below are the necessary components needed for each video
//   defaults: function() {
//     return {
//       title: '',
//       desc: '',
//       thumbnail: '',
//       videoId: '',
//       current_video: false
//     }
//   }
// });
