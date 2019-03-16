var AppModel = Backbone.Model.extend({

  defaults: function () {
    return {
      // initialize videos collection
      videos: new VideosCollection(),
    }
  },

  getFirstVideo: function () {
    return this.get('videos').first();
  },

  findVideoById: function (videoId) {
    return this.get('videos').findWhere({ id: videoId });
  }


});