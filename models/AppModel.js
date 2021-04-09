var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideoCollection(),

      current_video: null,

      show_video: false
    };
  },

  showVideo: function () {
    this.set('show_video', true);
  },

  updateCurrentVideo: function (id) {
    // id = parseInt(id);
    var allVideos = this.get('videos');
    var currentVideo = allVideos.findWhere({ id: id });
    this.set('current_video', currentVideo);
  },

});