VideoModel = Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    title: '',
    description: '',
    sourceUrl: '',
    previewImageUrl: '',
    played: false,
    playing: true

  }
});