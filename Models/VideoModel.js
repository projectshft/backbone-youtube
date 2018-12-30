//Model for each video item; 
//set attributes, fire an event based on changes to a specific attribute


var VideoModel = Backbone.Model.extend({
    //tell Backbone to assign different id (or an id from the given attributes) to each item
    idAttribute: '_id',

    //when using an object for defaults, change defaults to a function
    defaults: function () {
        return {
            videoId: '',
            title: '',
            image: '',
            description: ''
        }
    },

    parse: function (item) {
        return {
            videoId: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            image: item.snippet.thumbnails.default.url
        }
    },
});
