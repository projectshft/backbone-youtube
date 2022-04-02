let VideosCollection = Backbone.Collection.extend({
    model: VideoModel,

    parse: function(response) {
        let configuredResponse = response.items.map(function(vid) {
            return {
                id: vid.id.videoId,
                video_url: 'https://www.youtube.com/embed/' + vid.id.videoId,
                thumbnail_url: vid.snippet.thumbnails.default.url,
                title: vid.snippet.title,
                description: vid.snippet.description
            }
        })

        return configuredResponse;
    }
});