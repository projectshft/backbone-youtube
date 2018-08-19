var VideoModel = Backbone.Model.extend({
  defaults: function() {
    return {
      videoID: '',
      videoTitle: '',
      videoDesc: ''
    }
  }
});
