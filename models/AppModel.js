var AppModel = Backbone.Model.extend({
    defaults: function () {
        return {
            videos: new VideosCollection(),
        };
    },
    
    changeMainVideoToClickedVideo: function(selectedVideoId){

        var allVideos = this.get('videos');

        //finding the video that is currently playing
        var currentVideoPlaying = allVideos.findWhere({selectedVideo:true});

        //finding video that the user clicked on to play next
        var clickedOnVideoToPlay = allVideos.findWhere({videoId: selectedVideoId});

        //the video that was playing gets its attribute of slectedVideo changed
        //to false so selected video can have that attribute.
        if(currentVideoPlaying){
            currentVideoPlaying.set('selectedVideo', false);
        }
      
        //selected video getting selectedVideo attribute changed to true
        //this will alert appview to change view.
        clickedOnVideoToPlay.set('selectedVideo', true);
    }
});