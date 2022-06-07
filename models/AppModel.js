var AppModel = Backbone.Model.extend({
    defaults: function () {
        return {
            videos: new VideosCollection(),
            selected_video: null
        }
    },

    updateSelectedVideo: function (videoId) {
        var videos = this.get('videos');
        var selectedVideo = videos.findWhere({ videoId: videoId });

        this.set('selected_video', selectedVideo);
    }
});
