var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      videos: new YoutubeCollection(),

      current_video: null,
    };
  },
});