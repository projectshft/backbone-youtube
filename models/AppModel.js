var AppModel = Backbone.Model.extend({

  defaults: function () {
    return {
      // initialize videos collection
      videos: new VideosCollection(),
    }
  },

  findModelById: function (videoId) {
    return this.get('videos').findWhere({ id: videoId });
  }

});