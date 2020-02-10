var AppModel = Backbone.Model.extend({
    defaults: function () {
        return {
            videos: new VideosCollection(),
            currentVideo: null,
            query: ''
        }
    }

});