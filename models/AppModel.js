var AppModel = Backbone.Model.extend({
    defaults: function () {
      return {
        videos: new VideoCollection(),

        current_video: null
      };
    },

    showMainVideo: function (id) {
        console.log("show main video: ", id); 
    },
  
    showVideoList: function() {
        console.log("show video list"); 
    }
  });