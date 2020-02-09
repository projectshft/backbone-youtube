//the Video Model has title, descrition, thumbnail, and id attributes
var VideoModel = Backbone.Model.extend({
  //default attributes for the VideoModel
  defaults: function() {
    
    return {
      title: '',
      description: '',
      thumbnail: '',
      id: '',

    }
  }
});
