var AppModel = Backbone.Model.extend({
    defaults: function () {
      return {
        videos: new VideoCollection(),

        current_video: null,

        current_URL: '', 

        key: ''
      };
    },

    initialize : function () {
        this.set('key', 'AIzaSyD5dy-5GDx7outd6JdIGjjRFJxmkKKBmrw'); 
        this.set('current_URL', 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=cats&type=video&key=' + this.get('key'));
        this.get('videos').url = this.get('current_URL'); 
    },

    setSearchUrl : function (query) {
        var newUrl = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=' + query + '&type=video&key=' + this.get('key');
        this.set('current_URL', newUrl);
        this.get('videos').url = this.get('current_URL'); 
    },

    showMainVideo: function (id) {
        console.log("show main video: ", id); 
    },
  
    showVideoList: function() {
        console.log("show video list"); 
    }
  });