var VideoModel = Backbone.Model.extend({
    idAttribute: 'id',
    
    defaults: function () {
        return {
            id: '',
            title: '',
            description: '',
            thumbnail: '',
        }
    }
})

// console.log(VideoModel.toJSON())