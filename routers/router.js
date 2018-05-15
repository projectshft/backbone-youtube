//Use the Backbone Router and update the URL according to the video that's playing (with the video's id). On the reverse, allow a user to pass in a video's id into the URL and make a request to the Youtube API to load that video.
var VideoRouter = Backbone.Router.extend({
  routes: {
    'video/:id': 'showCurrentVideo',
    '*default': ''
  },

  showCurrentVideo: function (id) {
    var allVideos = appModel.get('videos');
    console.log(id)
    var currentVideo = allVideos.findWhere({ _id: id });

    appModel.set('current_video', currentVideo);
    // appModel.set('show_reviews', true);
  },

});
