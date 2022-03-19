var VideoCollection = Backbone.Collection.extend({

  model: VideoModel,

  addVideos: function (videoId, thumbnail, title, description) {
    this.create({
          videoId:  videoId,
          thumbnail: thumbnail,
          title: title,
          description: description
    });
  },

  initialize: function () {
    this.on('add', function (model){
      model.fetch();
    });
  }

});
