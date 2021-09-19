var VideoModel = Backbone.Model.extend ({
    idAttribute: '_id',
    defaults: function() {
        return {
            videoId: '',
            title: '',
            description: '',
            thumbnail: ''
        }
    },   
    
              
    
});


