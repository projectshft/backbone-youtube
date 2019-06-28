//Static model of the app
var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      videos: new VideosCollection(),
      current_video: null
    },
  }
})
