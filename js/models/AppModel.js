//AppModel holds two values
//The current search term
//and the VideosCollection that holds the results from that search term
var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      searchTerm: "",
      videos: new VideosCollection()
    }
  }
})
