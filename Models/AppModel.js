//video collection of the 5 upnext videos
var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideoCollection(),
      current_video: null, //video currently playing in the webapp
      query: 'puppies'//default search criteria
    }
  },

  showCurrentVideo: function (id) {
    var allVideos = this.get('videos');

    var currentVideo = allVideos.findwhere({videoId: id});

    this.set('current_video', currentVideo);


  }
});
