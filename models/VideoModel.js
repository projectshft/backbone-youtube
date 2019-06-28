VideoModel = Backbone.Model.extend({
  idAttribute: 'id',
  defaults: {
    title: '',
    description: '',
    embedUrl: '',
    thumbnailUrl: '',
    played: false,
    playing: true

  }
});