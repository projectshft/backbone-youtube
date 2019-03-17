var VideoModel = Backbone.Model.extend({
//need to assign a specific id to each video Model
    id: '_id'

    defaults: function () {
        return {
            title: '',
            vidId: '',
            img: '',
            vidInfo: ''
        }
    },

    parse: function(){
      
    }
});
