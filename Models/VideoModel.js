// Creates a default framework for the VideoModel

const VideoModel = Backbone.Model.extend({

  defaults: function() {
    return {
      id: '',
      title: '',
      description: '',
      thumbnail: ''
    };
  }
});