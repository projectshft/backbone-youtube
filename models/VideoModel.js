//Model for individual videos
var VideoModel = Backbone.Model.extend({

  search: '',

  defaults: function () {
    return {
      id: '',
      title: '',
      description: '',
      videoId: '',
      thumbnails: ''

    }
  }
});
