var AppModel = Backbone.Model.extend({
    defaults: function () {
        return {
            videos: new VideosCollection(),
            selected_video: null
        }
    }
});
