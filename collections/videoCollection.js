var VideoCollection = Backbone.Collection.extend({
  model: VideoModel,

  addVideo: function (url) {
    this.add({
      url: url,
    });
  },


})