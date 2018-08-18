var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideoCollection(),

      query: ''
      // current_video: null

    }
  }
});
