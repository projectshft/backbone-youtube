var VideoCollection = Backbone.Collection.extend({
  model: VideoModel,

  
  addVideo: function (videoId, videoThumbnail, title, description) {
    this.add({
      videoId: videoId,
      videoThumbnail: videoThumbnail,
      title: title,
      description: description

    });
  },
})