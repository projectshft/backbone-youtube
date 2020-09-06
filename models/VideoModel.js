var VideoModel = Backbone.Model.extend({
    idAttribute: 'id',
    
    defaults: function () {
        return {
            id: '',
            title: '',
            description: '',
            thumbnail: '',
            video_url: ''
        }
    }
})

// console.log(VideoModel.toJSON())