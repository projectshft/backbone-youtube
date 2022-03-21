var DetailModel = Backbone.Model.extend({
  idAttribute: 'videoId',
  
  defaults: {
    videoId: 0,
    title: '',
    description: '',
    thumbnail_url: ''
  }
})