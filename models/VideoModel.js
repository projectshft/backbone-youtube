//Initial Commit Placeholder //

VideoModel = Backbone.Model.extend({
  idAttribute: 'id',
  defaults: {
    title: '',
    description: '',
    embedUrl: '',
    thumbnailUrl: '',
    currentVideo: false,
    played: false,
    playing: false

  }
});