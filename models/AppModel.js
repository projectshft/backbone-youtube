//Static model of the app
//Will keep track of the current video so the view knows when to change
var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      videos: new VideosCollection(),
      current_video: null
    }
  },

  currentVideoSet: function() {
    var allVideos = this.get('videos');
    var currentVideo = allVideos.models[0];

    this.set('current_video', currentVideo);
  }

})
