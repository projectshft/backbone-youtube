var VideosCollection = Backbone.Collection.extend({
  model: VideoModel,

  currentModel: null,

  addVideo: function (title, description, videoId, thumbnailUrl) {
    this.add({
      title: title,
      description: description,
      videoId: videoId,
      thumbnailUrl: thumbnailUrl
    });
  }
})