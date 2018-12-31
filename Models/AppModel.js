//Holds all the state for the app (other than the values it delegates to its children)

var AppModel = Backbone.Model.extend({
    defaults: function (){
        return{
            //Create new collection
            videoList: new VideoCollection(),

            //playing video
            current_video: null,
            
        }
    },

    changePlayingVideo: function (videoId){
        var allVideos = this.get('videoList');
        var currentVideo = allVideos.findWhere({videoId: videoId});
        this.set('current_video', currentVideo);
        
    },
});