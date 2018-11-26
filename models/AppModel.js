var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {

      videos: new VideoCollection(null, {query:"cute+cats"}),

      current_video: null,
    }
  },
});
