var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection(),

      current_search: null,
      current_video: null
    };
  },


  initialize: function () {
   
  },

  updateCurrentVideo: function (videoId) {
    var allVideos = this.get('videos');
    var currentVideo = allVideos.findWhere({id: videoId});

    this.set('current_video', currentVideo);
   
  },

  updateCurrentSearch: function (query) {
    this.set('current_search', query);
  },

  renderInitialVideoView: function (id) {

    debugger;
    var allVideos = this.get('videos');
    console.log(allVideos);
    var firstVid = allVideos[0];
    console.log(firstVid);
  }

})