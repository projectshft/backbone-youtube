const VideoModel = Backbone.Model.extend({
  // OVERRIDES: id
  // Per YouTube API documentation: JSON response returns an id(#id) object with 4 key-value pairs. Limit response to only vidoes, not channels nor playlists, by using only id.videoId attribute (a string). (SHOULD "KIND" ALSO BE USED/CHECKED TO ENSURE ONLY VIDEOS???) If the id.type property's value is "youtube#video" (CHECK FOR THIS? IMPOSE LIMITATIONS TO ALLOW ONLY THIS???) then this property will be present and its value will contain YouTub's unique identifer for a video that mathces the search query.

  // Per Backbone documentation:
  //  * "id" will be coppied onto the model as a direct property.
  //  * "idAttribute" stores a model's unique identifier. For direct communication (with YouTube API) which uses a unique identifier, you can set a model's idAttribute to transparently map from that key to id.
  // *  "cid" is a unique identifier automatically assigned to all models when they're first created... handy when the model has not yet been saved to the server, and does not yet have its eventual true id, but already needs to be visible in the UI

  // Use idAttribute first, following sample code in Backbone documentation (p. 9). cid might be possible, even preferrable for this limited use, but it's likely not as robust for long-term design or bigger design with more functionality???

  // idAttribute: 'id.videoID',
  // '_id', // "id.videoID"????

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
});
