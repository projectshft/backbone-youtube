//appmodel holds the current state of the application

var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos : new VideosCollection();
    }
  }
});
