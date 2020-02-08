//One video model is made for each of the five video results
//returned by the youtube API
var VideoModel = Backbone.Model.extend({
  defaults: function() {
    return {
      id: "",
      title: "",
      thumbnail: "",
      description: ""
    }
  }
})
