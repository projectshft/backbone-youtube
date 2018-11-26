var VideoModel = Backbone.Model.extend({
    // idAttribute: 'items.id.videoId',

    defaults: function () {
        return {
            videoId: '',
            title: '',
            image: '',
            description: ''
        }
    }
});