var VideosCollection = Backbone.Collection.extend({
  model: VideoModel,

  addVideo: function (videoTitle, videoDescription, videoThumbnail, videoURL) {
    this.add({
      videoTitle: videoTitle,
      videoDescription: videoDescription,
      videoThumbnail: videoThumbnail,
      videoURL: videoURL
    });
  }
});
