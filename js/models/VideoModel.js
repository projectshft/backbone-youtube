var Video = Backbone.Model.extend({
  defaults: function () {
    return {
      videoId: '',
      name: '',
      description: '',
      imgUrl: ''
    }
  }

});
