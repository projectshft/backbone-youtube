var AppModel = Backbone.Model.extend({
    defaults: function(){
        return {
            query: '',
          
          //need to have the video got to the Collection
            videoList: new VideoCollection
        }
    }
});
