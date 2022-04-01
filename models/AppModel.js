
var AppModel = Backbone.Model.extend({ 

      videos: new VideoCollection(),

      current_video: null,
      display_video: false,
    
      displayVideo: function(clickedVideoId) {
        var allVideos = this.videos;
        var currentVideo = allVideos.findWhere({ id: clickedVideoId });
        this.set('current_video', currentVideo);

      },

  });