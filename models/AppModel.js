var AppModel = Backbone.Model.extend({
    defaults: function () {
        return {
            videos: new VideoCollection(),
            url: "https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&type=video&videoDefinition=high&videoEmbeddable=true&regionCode=us&key=AIzaSyAs1cLbbB7lUJsHsolNaTgni7tSfGPF-u4&q=",
            search: null,
            current_video: null
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
        console.log("this", this)
        console.log('searching videos');

        var videoList = this.get('videos');
        var newUrl = this.get('url') + this.get('search');

        //set url on video collection to url with updated search term
        videoList.url = newUrl;

        //send search phrase to fetch videos for collection
        videoList.fetchVideos();
    },

    updateCurrent: function (newCurrentVideo) {
        console.log('updating current')

        var videoList = this.get('videos');

        videoList.each(function (video) {
            //check if video is recently changed video
            if (video !== newCurrentVideo && video.get('current') === true) {
                //change old "current" video status to false
                video.set('current', false, { silent: true }); //prevent change event
            }
        }, this);

        //store selected video as current video
        this.set('current_video', newCurrentVideo); //sets off event to re-render page    
    }
});