var AppModel = Backbone.Model.extend({
    defaults: function(){
        return {
            // current_video: null,
            // current_video_info: '',
            videoList: new VideoCollection()
        }
    }
});