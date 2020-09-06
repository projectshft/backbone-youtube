var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection(),

      current_video: '',
    };
  },


  showVideo: function (thumbnail) {
    var allVideos = this.get('videos');
    var currentVideo = allVideos.findWhere({ thumbnail: thumbnail });
    this.set('current_video', currentVideo);
  },
});
