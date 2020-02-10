var VideoModel = Backbone.Model.extend({
    defaults: function () {
        return {
            title: '',
            description: '',
            thumbnailUrl: '',
            videoUrl: '',
            mainVideo: false
        }
    },
    parse: function (returnedData) {
        return {
            title: returnedData.snippet.title,
            description: returnedData.snippet.description,
            thumbnailUrl: returnedData.snippet.thumbnails.high.url,
            videoUrl: `https://www.youtube.com/embed/${returnedData.id.videoId}`
        }
    }
})