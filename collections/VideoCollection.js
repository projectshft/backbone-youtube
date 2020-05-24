var VideoCollection = Backbone.Collection.extend({
    url: "https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&type=video&videoDefinition=high&videoEmbeddable=true&key=AIzaSyCnbQYVfgMKrKtYq16mIjBs6aPE5xzwWjg&q=",

    key: "AIzaSyCnbQYVfgMKrKtYq16mIjBs6aPE5xzwWjg",

    model: VideoModel,

    fetchVideos: function (search) {
        console.log('fetching videos');
        //add search term to api url
        this.url = this.url + search;

        //replace current results with search results
        this.fetch({ reset: true }, { wait: true });
    },

    //set attributes on results
    parse: function (response) {
        console.log('parsing response');
        console.log("this: ", this)
        return response.items.map(function (video) {
                return {
                    id: video.id.videoId,
                    title: video.snippet.title,
                    info: video.snippet.description,
                    thumbnail: video.snippet.thumbnails.medium.url,
                    current: false
                }
        }, this);
    }

});