var VideoModel = Backbone.Model.extend({

    // Set default attributes for videos. 
    defaults: function () {
        return {
            title: '',
            description: '',
            videoId: '',
            thumbnail: ''
        };
    }
}); 