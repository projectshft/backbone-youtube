var AppModel = Backbone.Model.extend({

  defaults: function () {
    return {
      videos: new VideoCollection(),
      current_video: null,
    }
  },

  showCurrentVideo: function (id) {
    var allVideos = this.get('videos');
    var currentVideo = allVideos.findWhere({ id: id }); // I need to figure out id
    this.set('current_video', currentVideo);
  },

});
