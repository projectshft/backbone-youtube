var VideoModel = Backbone.Model.extend({

  defaults: function () {
    return {
      videoId: '',
      title:'',
      thumbnail:'',
    }
  },
});
