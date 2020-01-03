// App model 
var AppModel = Backbone.Model.extend({
    defaults: function () {
        return {
            videos: new VideoCollection(),

            currentSearchTerm: '',

            currentVideo: null
        }
    },

    //This sets the new keyword search in currentSearchTerm 
    setKeyword: function (searchInput) {
        this.set({ 'currentSearchTerm': searchInput })
        this.get('videos').searchVideo(this.get('currentSearchTerm'))
    },

    //This updates the value of currentVideo with the video that was clicked
    //which is refetched in the updateMainVideoOnClick function in the collection
    updateCurrentVideo: function (clickedVideo) {
        this.set({ 'currentVideo': clickedVideo })
        this.get('videos').updateMainVideoOnClick(this.get('currentVideo'))
        console.log('currentVideo', clickedVideo)
    }

});

