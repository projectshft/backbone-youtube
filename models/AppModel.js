var AppModel = Backbone.Model.extend({

  defaults: function () {
    return {
      // initialize videos collection
      videos: new VideosCollection(),
      current_video: null,
    }
  },

});