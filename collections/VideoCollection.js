var VideoCollection = Backbone.Collection.extend({
  model: VideoModel,

  addVideos: function (id, img, title, description) {
      this.add({
        id: id,
        img: img,
        title: title,
        description: description
      })
  }
})