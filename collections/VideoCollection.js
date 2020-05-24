var VideoCollection = Backbone.Collection.extend({
    url: "https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&type=video&videoDefinition=high&videoEmbeddable=true&key=AIzaSyCnbQYVfgMKrKtYq16mIjBs6aPE5xzwWjg&q=",

    key: "AIzaSyCnbQYVfgMKrKtYq16mIjBs6aPE5xzwWjg",

    model: VideoModel,

    fetchVideos: function (search) {
        this.url = this.url + search;
        this.fetch({ wait: true });
    },

    parse: function (response) {
        console.log(response)
        return response.items.map(function (video, index) {
            return index === 0 ?
                {
                    id: video.id.videoId,
                    title: video.snippet.title,
                    info: video.snippet.description,
                    thumbnail: video.snippet.thumbnails.medium.url,
                    current: true

                } : {
                    id: video.id.videoId,
                    title: video.snippet.title,
                    info: video.snippet.description,
                    thumbnail: video.snippet.thumbnails.medium.url,
                    current: false
                }
        }, this);
    }

});