var VideoCollection = Backbone.Collection.extend({
    url: "",

    model: VideoModel,

    fetchVideos: function () {
        console.log('fetching videos');
        var self = this;
        //replace current results with search results
        this.fetch({
            //reset collection
            reset: true, 

            //wait until fetch is complete before adding models to collection
            wait: true, 

            //log status on success
            success: function () {
                console.log("fetch successful");
            },

            //alert error code and message on fail
            error: function (collection, response) {
                alert("Error " + response.responseJSON.error.code + ": " + response.responseJSON.error.message)
            }
        });
    },

    //set attributes on results
    parse: function (response) {
        console.log('parsing response');
        
        //set attributes on results to add to collection
        return response.items.map(function (video) {
            return {
                videoId: video.id.videoId,
                title: video.snippet.title,
                info: video.snippet.description,
                thumbnail: video.snippet.thumbnails.medium.url,
            }
        }, this);
    }
});