var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideoCollection(),
      currentVideo: null
    }
  },

  setCurrentVideo: function (id) {
    var newCurrentVideo = this.get('videos').findWhere({id: id});
    this.set('currentVideo', newCurrentVideo);
  }
})