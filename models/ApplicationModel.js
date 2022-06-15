const ApplicationModel = Backbone.Model.extend({
  defaults() {
    return {
      videos: new VideoCollection(),
    };
  },
});
