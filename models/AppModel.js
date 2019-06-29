var AppModel = Backbone.Model.extend({
    defaults: function () {
      return {
        videos: new VideoCollection(),

        current_video: null,

        current_URL: ''
      };
    },

    initialize : function () {
        this.set('current_URL', 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=cats&type=video&key=AIzaSyCPPmlPfkv3U89LcDYIMstVbhT0ZN7MNPg');
        this.get('videos').url = this.get('current_URL'); 
    },

    showMainVideo: function (id) {
        console.log("show main video: ", id); 
    },
  
    showVideoList: function() {
        console.log("show video list"); 
    }
  });