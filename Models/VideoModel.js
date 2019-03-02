var VideoModel = Backbone.Model.extend({
  
  defaults: function () {
    return {
      videoTitle: '',
      videoDescription: '',
      videoId: '',
      thumbnail: ''
    }
  }
});
