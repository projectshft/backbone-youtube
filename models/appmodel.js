// App model 
var AppModel = Backbone.Model.extend({
    defaults: function () {
        var searchedVideo = 'batman';

        return {
            videos: new VideoCollection(),

            searchedVideo: '',

            currentVideo: ''
        }
    },

    // function that gets the first video of the api call 
    showCurrentVideo: function () {
        var allVideos = this.get('videos');
        var currentVideo = allVideos[0];

        this.set('currentVideo', currentVideo);
    },

    inputSearch: function () {
        this.get('videos').searchVideo(this.get('searchedVideo'))
    },


    renderSearchedVideo: function (searchedVideo) {
        this.$('#video-search').val();

        this.set(searchedVideo)
        console.log('searchedVideo', searchedVideo)
    }

});

