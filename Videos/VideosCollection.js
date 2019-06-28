var VideosCollection = Backbone.Collection.extend({
  //needs a url
  url: null,
  //takes a video Model
  model: VideoModel,

  //way to add video model to Collection
  addVideo: function(title,videoID, description,thumbnailLink){
    this.add({
      title: title,
      videoID: videoID,
      description: description,
      thumbnailLink: thumbnailLink
    });
  }
});
