var AppModel = Backbone.Model.extend({
    defaults: function () {
        return {
            videos: new VideosCollection(),
            currentVideo: null,
            query: ''
        }
    },

    initialize: function () {
        this.listenTo(this, 'change:query', this.searchAPI )
    },

    videoSearch: function (searchInput) {
        console.log(`Looking for videos with ${searchInput}`);
        //this sets the query equal to the search input 
        this.set('query', searchInput)
    },
    

    searchAPI: function() {
        //this invokes the function associated with the key findVideos 
        this.get('videos').findVideos(this.get('query'));
    }


});