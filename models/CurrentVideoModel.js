var CurrentVideoModel = Backbone.Model.extend({

  defaults: function () {
    return {
      title: '',
      description: '',
      videoID: ''
    }
  }
});