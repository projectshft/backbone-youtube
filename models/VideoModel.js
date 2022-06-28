const VideoModel = Backbone.Model.extend({
  idAttribute: 'videoId',
  
  defaults: {
    title: '',
    description: '',
    thumbnailUrl: '',
  },
});