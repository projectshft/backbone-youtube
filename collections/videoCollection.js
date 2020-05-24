var VideoCollection = Backbone.Collection.extend({
  model: VideoModel,

  //add video to the video collection when called
  addVideo: function (videoId, videoThumbnail, title, description) {
    this.add({
      videoId: videoId,
      videoThumbnail: videoThumbnail,
      title: title,
      description: description

    });
  },
})