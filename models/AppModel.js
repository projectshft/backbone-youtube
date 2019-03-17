var AppModel = Backbone.Model.extend({
    defaults: function(){
        return {
          //need key for video that is currently playing
            videoPlaying: null,

          //need to have the video got to the Collection
            videoList: new VideoCollection
        }
    }
});
