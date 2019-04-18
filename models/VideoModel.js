var VideoModel = Backbone.Model.extend({
  defaults: function() {
    return {
      id: '',
      title: '',
      description: '',
      thumbnail: ''
    }
  }
})
