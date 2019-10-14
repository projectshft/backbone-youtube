var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideoCollection(),

      current_search: null,

      // either true or false
      show_video: false
    }
  },

});
