var VideoModel = Backbone.Model.extend({
  defaults: function () {
    return {
      title: '',
      description: '',
      thumbnail: '',
      id: '',
    }
  }
});
