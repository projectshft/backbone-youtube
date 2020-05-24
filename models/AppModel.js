var AppModel = Backbone.Model.extend({
    defaults: function () {
        return {
            videos: new VideoCollection(),
            current_video: null,
            search: null,
        }
    },

    initialize: function() {
       
    }
});