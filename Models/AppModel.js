var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection(),
      
      current_video: null,
    };
  },

  fetchResults: function (query) {
    appModel.get('videos').fetch({ reset: true});
  }
});