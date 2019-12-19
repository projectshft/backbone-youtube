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
        this.searchedVideo = 'robin williams',
            this.fetch({ reset: true });
    },


    renderSearchedVideo: function (searchedVideo) {
        this.$('#video-search').val();

        this.set(searchedVideo)
        console.log('searchedVideo', searchedVideo)
    }

});

