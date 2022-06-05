const VideoModel = Backbone.Model.extend({
  defaults: function() {
    return {
      img: '',
      title: '',
      description: ''
    }
  }
})