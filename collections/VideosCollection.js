var VideosCollection = Backbone.Collection.extend({
  model: VideoModel,

  addVideo: function (id, title, desc, thumb) {
    this.add({
      id: id,
      title: title,
      description: desc,
      thumbnailUrl: thumb
    });
  }
});