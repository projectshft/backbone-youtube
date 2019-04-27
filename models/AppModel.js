const AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      videos: new VideosCollection(),
      feature_video: null,
      query: 'Reggie Watts Ted'
    };
  },
  // A function to change the feature video to one on the list, per click event by user
  changeFeatureVideo: function(videoId) {
    let videoVault = this.get('videos');

    // Per Backbone documentation: findWhere directly returns only the first model in the collection that matches the passed attributes.
    let featureVideo = videoVault.findWhere({ videoId: videoId });
    this.set('feature_video', featureVideo);
  }
});
