const AppModel = Backbone.Model.extend({
  // Set defaults to return new VideosCollection
  defaults: function() {
    return {
      // initialize videos
      videos: new VideosCollection(),
      feature_video: null
      // query: 'Reggie Watts'
    };
  },

  // A function to change the current feature video to one on the list, per click event by user (have handler in view; use "remove"?) or at the end of the feature video's playtime (extension 4). "shift" the next one from the top of the list to the feature player???).
  changeFeature: function(videoId) {
    let videoVault = this.get('videos');

    // Per Backbone documentation: findWhere directly returns only the first model in the collection that matches the passed attributes.
    let featureVideo = videoVault.findWhere({ videoId: videoId });
    console.log('featureVideo =', featureVideo);
    this.set('feature_video', featureVideo);
  }
});

// setCurrentVideo: function(id) {
//   var allVideos = this.get('videos');
//   allVideos.forEach(function(index) {
//     index.set('feature_video', false);
//   });
//   var currentVideo = allVideos.findWhere({ videoId: id });
//   currentVideo.set('current_video', true);
//   console.log(currentVideo);
// }
// });
