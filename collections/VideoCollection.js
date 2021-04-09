var VideoCollection = Backbone.Collection.extend({
  model: VideoModel,

  addVideo: function (name, description, video_url) {
    this.add({
      name: name,
      description: description,
      video_url: video_url
    })
  }

  // initialize: function () {

  //   this.on('add', function (model) {
  //     model.fetch();
  // })
  // }
});