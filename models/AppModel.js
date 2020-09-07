var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection(),
      current_video: '',
    };
  },

  showVideo: function (thumbnail) {
    // console.log('inshowvideo')
    //Compare the thumbnail value of the clicked image to the thumbnail
    //values of all videos. Grab the match and set it to a variable.
    var allVideos = this.get('videos');
    var currentVideo = allVideos.findWhere({ thumbnail: thumbnail });
    //Set the current_video to the matched video.
    this.set('current_video', currentVideo);
    //A listener in the appView will recognize the change in current video
    //and re-render it.
  },
});
