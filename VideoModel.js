var VideoModel = Backbone.Model.extend({

  // I'm not using IdAttribute because I'm not trying to delete
  // anything from the api. I'm using videoId in order to set
  // embedded urls but that's it.

  defaults: function () {
    return {
      videoId: '',
      title: '',
      description: '',
      thumbnail: '',
    }
  }
});
