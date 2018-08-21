var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideoCollection(),


      current_video: null
    }

  },
  initialize: function(){
    console.log('app model initialized')
  }
})
var appModel = new AppModel();
