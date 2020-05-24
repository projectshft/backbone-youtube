var AppModel = Backbone.Model.extend({

  defaults: function () {
    return {
      videos: new VideoCollection("number three they might be giants")
      // current_video: null,
      // hide_current_video_in_side_view: false
    }
  },


  // showCurrentVideo: function (videoId) {
  //   var allVideos = this.get('videos');
  //   var currentVideo = allVideos.findWhere({ videoId: videoId }); // I need to figure out id
  //
  //   this.set('current_video', mainVideo);
  //   this.set('hide_video_in_side_view', true); // make sure we use display: hide in AppView
  // },

});
