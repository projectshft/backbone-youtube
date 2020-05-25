var AppModel = Backbone.Model.extend({
    defaults: function () {
        return {
            videos: new VideoCollection(),
            url: "https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&type=video&videoDefinition=high&videoEmbeddable=true&regionCode=us&key=",
            search: null,
            current_video: null,
            apiKey: ""
        }
    },

    initialize: function () {
        //when current status is changed on a video, update current video property
        this.listenTo(this.get('videos'), 'change:current', this.updateCurrent);

        //when search term is updated, send new search
        this.listenTo(this, 'change:search', this.searchVideos);
    },

    //take search term and pass it to fetchVideos
    searchVideos: function () {
        //get collection and api url
        var videoList = this.get('videos');
        var newUrl = this.get('url') + this.get('apiKey') + "&q=" + this.get('search');

        //set url on video collection to url with updated search term
        videoList.url = newUrl;

        //send search phrase to fetch videos for collection
        videoList.fetchVideos();
    },

    //update which video is stored as current video 
    updateCurrent: function (newCurrentVideo) {
        //get (previous) current video and video collection
        var currentVideo = this.get('current_video');
        var videoList = this.get('videos');

        //check if there was a current video
        if (currentVideo) {
            //change "current" status to false
            currentVideo.set('current', false, { silent: true }); //prevent new update event
        }

        //find new current video
        var newCurrentVideo = videoList.findWhere({ current: true });

        //replace old current video (if any) with new current video
        this.set('current_video', newCurrentVideo); //sets off event to re-render page 
    }
});