//Create an individual video model

var AppModel = Backbone.Model.extend({

  defaults: function() {
    return {
      videos: new VideoCollection(),
      current_video: null,
      videoId: '',
      title: '',
      thumbnail: '',
      description: ''
    }
  }

});
