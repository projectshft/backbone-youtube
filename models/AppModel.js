var AppModel = Backbone.Model.extend({
  attribute: 'videos',

  defaults: function() {
    return {
      videos: new VideosCollection(),
    }
  }
})


//Your AppModel will have an
//attribute called ‘videos’ (or whatever you want to call it) that will be your videos collection.
