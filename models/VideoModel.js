var VideoModel = Backbone.Model.extend({
  defaults: function () {
    return {
      title: '',
      description: '',
      videoId: 0,
    }
  },

  parse: function (response) {
    return response;
  }
});