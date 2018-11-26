var VideosCollection = Backbone.Collection.extend({
  //Sets Video Attributes
  model: VideoModel,
  addVideo: function (id,title,description,video_url) {
    this.add({
      id: id,
      title: title,
      description: description,
      video_url: video_url
    });
  },
  fetch: 'fetchVideos'
});
