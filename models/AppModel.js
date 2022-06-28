const AppModel = Backbone.Model.extend({
  defaults() {
    return {
      videos: new VideoCollection(),
      iframeVideo: null,
    };
  },
});