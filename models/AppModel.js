var AppModel = Backbone.Model.extend({

  defaults: function () {
    return {
      // initialize videos collection
      videos: new VideosCollection(),
    }
  },

  getFirstModel: function () {
    return this.get('videos').first();
  },

  findModelById: function (videoId) {
    return this.get('videos').findWhere({ id: videoId });
  }

});