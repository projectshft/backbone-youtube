var VideoModel = Backbone.Model.extend({
  //below are the necessary components needed for each video
  defaults: function() {
    return {
      title: '',
      desc: '',
      thumbnail: '',
      videoId: '',
    }
  }
});
