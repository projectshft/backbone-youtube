var AppModel = Backbone.Model.extend({
     defaults: function () {
        return {
            //change null to current video
            videoList: new VideoCollection(),
            current_video: null
        }
    },

    playCurrentVideo: function () {
        var videosAll = this.get('videoList'); 
        // var array = _.toArray(videosAll);
        // var currentVideo = array[0];

        var currentVideo = videosAll.findWhere({ids: 1});

        console.log(currentVideo);
        this.set('default_video', currentVideo);
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

