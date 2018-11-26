var AppModel = Backbone.Model.extend({
     defaults: function () {
        return {
            //change null to current video
            videoList: new VideoCollection(),
            default_video: null

            
            // current_video: null
            
            
        }
    },

    playDefaultVideo: function () {
        var videosAll = this.get('videoList'); 
        // var array = _.toArray(videosAll);
        // var defaultVideo = array[0];

        var defaultVideo = videosAll.findWhere({ids: 1});

        console.log(defaultVideo);
        this.set('default_video', defaultVideo);
    }

    // playVideo: function (id) {
    //     ids = parseInt(id);
    //     var allVideos = this.get('videoList');
    //     var currentVideo = allVideos.findWhere({
    //         ids: id
    //     });
    //     this.set('current_video', currentVideo);

    // }
});

