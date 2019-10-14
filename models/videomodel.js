// This is the default for the video model 
var VideoModel = Backbone.Model.extend({
    idAttribute: '_id',

    defaults: function () {
        return {
            title: '',
            description: '',
            thumbnails: ''
        }
    }
});
