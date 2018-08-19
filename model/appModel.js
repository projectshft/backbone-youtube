var AppModel = Backbone.Model.extend({
  defaults: function () {
      videos: new VideoCollection();

      return videos;

  }
})
