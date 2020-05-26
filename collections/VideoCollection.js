var VideoCollection = Backbone.Collection.extend({
    url: "",

    model: VideoModel,

    fetchVideos: function () {
        //replace current results with search results
        this.fetch({
            //reset collection
            reset: true,

            //wait until fetch is complete before adding models to collection
            wait: true,

            //alert error code and message on fail
            error: function (collection, response) {
                alert("Error " + response.responseJSON.error.code + ": " + response.responseJSON.error.message)
            }
        });
    },

    //get the needed data from response and save it to model
    parse: function (response) {
        //check if any results were returned
        if (response.pageInfo.totalResults === 0) {

            //alert error if response doesn't return results
            return alert("No results found. Try another search");

        } else {
            //set attributes on results to add to collection
            return response.items.map(function (video) {
                return {
                    videoId: video.id.videoId,
                    title: video.snippet.title,
                    info: video.snippet.description,
                    thumbnail: video.snippet.thumbnails.high.url,
                }
            }, this);
        }
    }
});