let VideoModel = Backbone.Model.extend({

  defaults: function () {
    return {
      videoId: '',
      thumbnail: '',
      title: '',
      description: ''
    }
  }
});