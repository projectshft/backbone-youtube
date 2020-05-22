var VideoModel = Backbone.Model.extend({
  defaults: function() {
    return {
      title: '',
      description: '',
      image_url: '',
      currently_playing: false
    }
  }
});
