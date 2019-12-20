// App model 
var AppModel = Backbone.Model.extend({
    defaults: function () {
        return {
            videos: new VideoCollection(),

            currentSearchTerm: '',

            currentVideo: ''
        }
    },

    getVideos: function () {
        this.get('videos').searchVideo('currentSearchTerm')
    },

    // function that gets the first video of the api call 
    showCurrentVideo: function () {
        var allVideos = this.get('videos');
        var currentVideo = allVideos[0];

        this.set('currentVideo', currentVideo);
    },

    setKeyword: function (searchInput) {
        this.set({ 'currentSearchTerm': searchInput })
        this.get('videos').searchVideo(this.get('currentSearchTerm'))
    },


    updateSearchTerm: function (currentSearchTerm) {

        this.set('currentSearchTerm', currentSearchTerm)
        console.log('currentSearchTerm', currentSearchTerm)
    }

});

