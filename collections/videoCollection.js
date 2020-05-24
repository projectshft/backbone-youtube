var VideoCollection = Backbone.Collection.extend({
  model: VideoModel,

  addVideo: function (videoId) {
    this.add({
      videoId: videoId,
    });
  },

})