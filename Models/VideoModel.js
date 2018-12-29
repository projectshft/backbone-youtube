//Model for each video item; 
//set attributes, fire an event based on changes to a specific attribute
//Load and save from server

var VideoModel = Backbone.Model.extend({
    idAttribute: '_id',
    defaults: function () {
        return {
            videoId: '',
            title: '',
            image: '',
            description: ''
        }
    },

});