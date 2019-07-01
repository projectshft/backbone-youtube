
//Define the defaults of the AppModel
var AppModel = Backbone.Model.extend ({
  defaults: function () {
    return {
      // videos is used in the AppView in the listento event. 
      videos: new VideosCollection(),
    }
  }
});

