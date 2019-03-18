const AppModel = Backbone.Model.extend({
  defaults: function () {
    // AppModel should contain the VideosCollection
    return {
      videos: new VideosCollection(),
      // Set a featured video with the videoId as the value to identify which video is playing
      featured_video: null
    }
  },
  // do an initial fetch so the screen isn't blank on load or refresh
  initialize: function () {
    this.get("videos").fetch();
  },

  // Need a function to set the featured_video attribute based on the videoId that's passed in
  setFeaturedVideo: function (id) {
    const featuredVideo = this.get("videos").findWhere({ videoId: id });
    this.set("featured_video", featuredVideo);
  },
});
