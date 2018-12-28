//Model for each video item

var VideoModel = Backbone.Model.extend({
    defaults: function () {
        return {
            videoId: '',
            title: '',
            image: '',
            description: ''
        }
    }
});