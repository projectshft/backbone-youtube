//Create an individual video model

var AppModel = Backbone.Model.extend({

  defaults: function() {
    return {
      videos: new VideosCollection(),
      current_video: null
    }
  }

});
