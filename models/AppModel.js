
var AppModel = Backbone.Model.extend({ 
  defaults: function() {
    return {
    
      videos: new VideoCollection(),
      current_video: null

    }
  },
      
      display_video: false,
      displayVideo: function(clickedVideoId) {
        // debugger;
        var allVideos = this.get('videos');
        var currentVideo = allVideos.findWhere({ id: clickedVideoId });
        console.log(currentVideo);
        this.set('current_video', currentVideo);
        

      },
  });