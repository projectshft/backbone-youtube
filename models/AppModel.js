var AppModel = Backbone.Model.extend({
    defaults: function () {
        return {
            videos: new VideosCollection(),
            currentVideoId: '',
            query: ''
        }
    },

    initialize: function () {
        this.listenTo(this, 'change:query', this.searchAPI )
        this.listenTo(this.get('videos'), 'reset', this.updateCurrentVideo )
    },

    videoSearch: function (searchInput) {
        console.log(`Looking for videos with ${searchInput}`);
        //This sets the query equal to the search input 
        this.set('query', searchInput)
    },
    

    searchAPI: function() {
        //This invokes the function associated with the key findVideos 
        this.get('videos').findVideos(this.get('query'));
    },

    updateCurrentVideo: function () {
        //This updates the currentVideoId with the first video in the collection
        var newCurrentVideo = this.get('videos').at(0).get('videoId')

        this.set('currentVideoId', newCurrentVideo)
        
        
    }


});