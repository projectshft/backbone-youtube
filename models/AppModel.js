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
    }
});