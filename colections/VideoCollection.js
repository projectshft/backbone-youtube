var VideosCollection = Backbone.Collection.extend({
    url: '',
    model: VideoModel,
    parse: function (returnedData) {
      return returnedData.items
    }
  });