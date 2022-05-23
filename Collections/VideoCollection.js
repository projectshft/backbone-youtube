var VideoCollection = Backbone.Collection.extend({
  model: VideoModel,

  addVideo: function (name, style, abv, image_url) {
    this.add({
      name: name,
      style: style,
      abv: abv,
      image_url: image_url
    });
  }
});