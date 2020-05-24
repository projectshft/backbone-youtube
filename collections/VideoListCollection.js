var VideoListCollection = Backbone.Collection.extend({
  model: VideoListModel,

  addVideoList: function (videoId, videoThumbnail, title, description) {
    this.add({
      videoId: videoId,
      videoThumbnail: videoThumbnail,
      title: title,
      description: description
    });
  },

})