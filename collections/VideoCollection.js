var VideoCollection = Backbone.Collection.extend({

    model: VideoModel,

    addVideo: function (title, description, videoId, thumbnail) {
        this.add({
            title: title,
            description: description,
            videoId: videoId,
            thumbnail: thumbnail
        }, { wait: true });
    },

    parse: function (response) {
        var videoArray = response.items;
        console.log(videoArray);
        console.log(response);

        return response.items.map(function (b) {
            console.log(b.snippet.title, b.snippet.description, b.id.videoId, b.snippet.thumbnails.default.url);
            return {
                title: he.decode(b.snippet.title),
                description: he.decode(b.snippet.description),
                videoId: b.id.videoId,
                thumbnail: b.snippet.thumbnails.default.url
            };
        });
    }
}); 