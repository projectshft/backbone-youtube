var AppModel = Backbone.Model.extend({
    defaults: function () {
        return {
            videos: new VideosCollection(),

            current_video: null,        ////This needs to be changed to the first video to play
        }
    }
});

