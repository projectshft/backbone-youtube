var VideoModel = Backbone.Model.extend({
    defaults: function () {
        return {
            title: '',
            description: '',
            thumbnail_url: '',
            videoId: '',
            selectedVideo: false
        }
    },

    //second parse to select the four desired attributes.
    parse: function(videoData){
        return {
            title: videoData.snippet.title,
            description: videoData.snippet.description,
            thumbnail_url: videoData.snippet.thumbnails.default.url,
            videoId: videoData.id.videoId
        };
    }
});
