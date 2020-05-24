var VideoListCollection = Backbone.Collection.extend({
  model: VideoModel,

  addVideoList: function (videoId, videoThumbnail, title, description) {
    this.add({
      videoId: videoId,
      videoThumbnail: videoThumbnail,
      title: title,
      description: description

    });
  },

})
