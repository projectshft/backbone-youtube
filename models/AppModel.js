var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection(),

      current_video: '',
    };
  },


  showVideo: function (thumbnail) {
    console.log('inshowvideo')
    var allVideos = this.get('videos');
    var currentVideo = allVideos.findWhere({ thumbnail: thumbnail });
    this.set('current_video', currentVideo);
  },
});
