var AppModel = Backbone.Model.extend({

  defaults: function() {
    return {
      videos: new VideosCollection(),
      current_video_index: 0
    }
  },

  setCurrentVideoIndex: function(videoId) {

    // var currentVideo;
    // console.log(videoId)

    // if (videoId === "") {
    var allVideos = this.get('videos');
    //   console.log(allVideos);
    //   currentVideo = 0//allVideos.at(0).get('videoId');
    // } else {
    //   currentVideo = videoId;
    // }
    //
    // this.set('current_video', currentVideo);
    // alert(this.get('current_video'));

    var currentVideo = allVideos.indexOf(allVideos.findWhere({ videoId: videoId })); // I need to figure out id
    this.set('current_video_index', currentVideo);

    alert(this.get('current_video_index'));
  }

});
