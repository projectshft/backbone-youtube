var VideoModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideoCollection(),

      current_video: null,

      show_videos: false



    }



  },


});
