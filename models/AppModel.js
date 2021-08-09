var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      videos: new VideoCollection(),
      current_video: null,
    };
  },

  updateCurrentVideo: function(clickedVidId) {
    var allVids = this.get('videos');
    
    var currentVideo = allVids.findWhere({id: clickedVidId});
   
    this.set('current_video', currentVideo);
  }
});