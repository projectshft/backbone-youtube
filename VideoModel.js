var VideoModel = Backbone.Model.extend({
  idAttribute: '_id',

  defaults: function () {
    return {
      id: '',
      title: '',
      description: '',
      videoURL: ''
    }
  }
});