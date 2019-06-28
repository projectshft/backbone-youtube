var AppModel = Backbone.Model.extend({
//app model kicks off creation of videos collection
  default: function(){
    return{
      videos: new VideosCollection()
    }
  }
});
