var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection(),
      
      current_video: null,
    };
  },

  fetchResults: function (query) {
    appModel.get('videos').fetch({ reset: true});
  },

  updateCurrentVideo: function (id) {
    var allVideos = this.get('videos');
    var currentVideo = allVideos.findWhere({id:id});
    
    this.set('current_video', currentVideo);
  },

});