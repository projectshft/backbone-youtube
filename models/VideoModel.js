//Create a video model to hold the individual video data

var VideoModel = Backbone.Model.extend({

  idAttribute: 'videoId',
    defaults: {
        videoId: '',
        title: '',
        description:''
    },

    initialize: function () {

    }

});
