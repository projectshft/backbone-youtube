// This is what the model looks like inside the VideosCollection 

var VideoModel = Backbone.Model.extend({

    defaults: function () {
        return {
            videoId: '',
            title: '',
            description: '',
            thumbnailURL: '',
            
        }
    }
})