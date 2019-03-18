var AppModel = Backbone.Model.extend({
  defaults: function () {
    return{
      videos: new VideoCollection(),
      playingVideo: null,
      search: 'backbone ruined my life.'

    };


  },


});
