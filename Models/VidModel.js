var VidModel = Backbone.Model.extend({
  idAttribute: '_id',
  
  defaults: function () {
    return {
      title: '',
      description: '',
      videoId: '',
      default: '',
     };
    },
  });