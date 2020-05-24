var VideoCollection = Backbone.Collection.extend({
    url: "",

    model: VideoModel,

    fetchVideos: function (urlSear) {
        console.log('fetching videos');
       
        //replace current results with search results
        this.fetch({ reset: true }, { wait: true });
    },

    //set attributes on results
    parse: function (response) {
        console.log('parsing response');
        console.log("this: ", this)
        return response.items.map(function (video) {
                return {
                    videoId: video.id.videoId,
                    title: video.snippet.title,
                    info: video.snippet.description,
                    thumbnail: video.snippet.thumbnails.medium.url,
                    current: false
                }
        }, this);
    }

});