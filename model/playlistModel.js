var playlistModel = Backbone.Model.extend({
  defaults: function () {
    return {
      model: new youtubeVideoCollection()
    }
  }
});
