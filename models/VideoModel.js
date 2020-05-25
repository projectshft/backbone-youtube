var VideoModel = Backbone.Model.extend({
  idAttribute: '_id',
  
  defaults: function() {
    return {
      videoId: '',
      videoThumbnail: '',
      title: '',
      description: '',
    }
  },
});