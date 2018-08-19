var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection(),
    }
  },

  clicked: function () {
    console.log('App Model says: clicked in App View');
  }
});
