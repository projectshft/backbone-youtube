
var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      videos: new VideosCollection(),

      current_video: null

    };
  },

  //this function takes in the id captures from the video from clicking the thumbnail
  //and sets that video to current_video
  setCurrentVideo: function(id) {
    var allVideos = this.get('videos');
    //filter through the videos collection to find the video model with the matching id
    var currentVideo = allVideos.findWhere({
      id: id
    });
    //set that model as the currentVideo
    this.set('current_video', currentVideo);
  }
});
