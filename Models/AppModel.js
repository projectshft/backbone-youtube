//video collection of the 5 upnext videos
var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection(),
      current_video: null,
        //default search criteria
        query: 'flat twist'
       
      }
    },

      initialize: function() {
        this.get('videos').fetchVideos(this.get('query'));
      }
    });


