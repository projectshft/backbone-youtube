var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection(),
  
      current_video: null
    };
  },

  initialize: function () {
    this.listenTo(this.get('videos'), 'reset', this.setInitialVideo);
  },

  setInitialVideo: function () {
    var currentVideo = this.get('videos').at(0);
    
    this.set('current_video', currentVideo);
  },

  updateCurrentVideo: function (videoId) {
    var currentVideo = this.get('videos').findWhere({ videoId: videoId});

    this.set('current_video', currentVideo);
  }
});