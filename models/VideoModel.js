var VideoModel = Backbone.Model.extend({
  idAttribute: '_id',

  defaults: function () {
    return {
      title: '',
      description: '',
      videoFrame: '',
      videoImg: ''
    }
  }
});