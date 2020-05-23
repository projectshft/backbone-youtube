var VideoModel = Backbone.Model.extend({
  idAttribute: '_id',

  defaults: function () {
    return {
      name: '',
      style: '',
      abv: 0,
      image_url: '',
    }
  }
});
