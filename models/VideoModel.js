var VideoModel = Backbone.Model.extend({

  idAttribute: "videoId",

  defaults: function () {
    return {
      videoId: '',
      title: '',
      description: '',
      thumbnail: '',
    }
  }

});
