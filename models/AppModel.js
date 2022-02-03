var AppModel = Backbone.Model.extend({
    defaults: function(){
        return {
            videos: new VideosCollection(),
            main_video: undefined
        }
    },

    initialize: function(){
        this.listenTo(this.get('videos'), 'reset', this.setMainVideo)
    },

    setMainVideo: function(){
        var mainVideo = this.get('videos').models[0].attributes;

        this.set('main_video', mainVideo);
    },

    updateMainVideo: function(id){
        if(id){
            var allVideos = this.get('videos');

            var newMainVideo = allVideos.findWhere({ id: id });
            
            this.set('main_video', newMainVideo.attributes);
        }else{
            var firstVideo = this.get('videos').models[0];
        } 
    }

})