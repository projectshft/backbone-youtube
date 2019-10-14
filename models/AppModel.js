var AppModel = Backbone.Model.extend({
    defaults: function () {
        return {
            searchTerm: '',
            videos: new VideosCollection(),
            current_video: null
        };
    },
    searchVideos: function () {
        this.get('videos').searchVideos(this.get('searchTerm'));
    },
    showVideo: function (id) {
        var allVideos = this.get('videos');

        var currentVideo = allVideos.findWhere({ videoId: id });
        this.set('current_video', currentVideo);
    },
});