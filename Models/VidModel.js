var VidModel = Backbone.Model.extend({
  defaults: function () {
    return {
      title: '',
      videoId: '',
      thumbnail: '',
    }
  },
});