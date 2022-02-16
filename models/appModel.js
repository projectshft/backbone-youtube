var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection(),

      current_video: null
    }
  },

  updateCurrentVideo: function (id) {
    var allVideos = this.get('videos');
    var currentVideo = allVideos.findWhere({ videoId: id })
    
    this.set('current_video', currentVideo || this.get('videos').models[0]);
    console.log(this.get('current_video'))
  }
})