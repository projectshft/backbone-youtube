var AppModel = Backbone.Model.extend({

  defaults: function () {
    return {
      videos: new VideosCollection(),
// create attribute to store current video
      current_video: null,
    }
  },
// grab the clicked id from the viewVideo function in appView
  showVideo: function (id) {
// get all of the videos in the collection
    var allVideos = this.get('videos');
// find the video id that matches the id passed into the function
    var currentVideo = allVideos.findWhere({ id: id });

// set the corresponding video to the current video
    this.set('current_video', currentVideo);
  }
});
