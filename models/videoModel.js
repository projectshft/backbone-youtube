var VideoModel = Backbone.Model.extend({
  idAttribute: 'id',

  defaults: function () {
    return {
      title: '',
      description: '',
      id: ''
    }
  }
});
