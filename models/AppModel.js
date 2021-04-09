var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      videos: new VideoCollection(),
      searchTerm: "cats",
      mainVideo: null
    };
  },

  updateMainVideo: function (id) {
    var allVideos = this.get('videos');
    var currentVideo = allVideos.findWhere({ videoId: id });
    this.set('mainVideo', currentVideo);
  },
});