var VideoModel = Backbone.Model.extend({
    //idAttribute: '_id',
    
    defaults: function () {
        return {
            title: '',
            description: '',
            thumbnail: '',
            videoId: ''
        }
    }
});

// var videoModel = new VideoModel
// console.log(videoModel)