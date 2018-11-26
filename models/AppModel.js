//Main app model, controls data for the current video, and the related videos from the search
var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      videos: new VideoCollection(),
      current_video_model: null
    }
  },
  initialize: function() {
    //Need to initialize the video with a model, but I need to wait until the fetch is complete
    this.get('videos').fetch({
      success: function() {
        this.appModel._setFirstVideo()
      }
    })
  },
  setCurrentVideo: function(video_Id) {
    var videoCollection = this.get('videos');
    //need to set the attribute as a MODEL not an ID or URL
    var selectedVideo = videoCollection.findWhere({
      videoId: video_Id
    });
    this.set('current_video_model', selectedVideo);
  },
  _setFirstVideo: function() {
    var firstVideoInCollection = this.get('videos').models[0];
    this.set('current_video_model', firstVideoInCollection);
  }
})
