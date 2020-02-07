var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      searchTerm: "",
      videos: new VideosCollection()
    }
  }
})
