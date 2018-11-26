var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      //set the default parameters of the query to allow for automatic search at load
      query: 'asmr',
      videos: new VideosCollection()
    }
  }
});
