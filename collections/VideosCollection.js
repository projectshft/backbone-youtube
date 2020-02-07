var VideosColection = Backbone.Collection.extend({

    url: 'https://www.googleapis.com/youtube/v3/search',

    model: VideoModel,

    parse: function(response) {
        // need to return the array of data for that query
    }

});