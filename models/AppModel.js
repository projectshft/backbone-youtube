var AppModel = Backbone.Model.extend({
    defaults: function(){
        return {
          //need key for video that is currently playing
            videoPlaying: null,

          //need to have the video got to the Collection
            videoList: new VideoCollection
        }
    },

//needs to be able to switch from the current video to the video on the list
    switchVideo: function(vidId){
      var videos = this.get('videoList');
      var streamingVideo = videos.findWhere({ vidID: vidId });
      this.('videoPlaying', streamningVideo);
    },
});
