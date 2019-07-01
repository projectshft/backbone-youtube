var VidModel = Backbone.Model.extend({
  defaults: function(){
    return {
      id: '',
      title: '',
      thumbnail: '',
      description: ''
    };
  }
});
