var VidModel = Backbone.Model.extend({
  defaults: function(){
    return {
      thumbnail: '',
      title: '',
      id: '',
      description: ''
    };
  },
});
