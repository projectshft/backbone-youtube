var SideVideosView = Backbone.View.extend({
  className: 'thumbnailList mb-2',

  model: VideoModel,

  events:{
    'click .side-vid': 'playVideo'
  },

  template: Handlebars.compile($('#playlist-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },

  playVideo: function() {
    var clickedVideo = this.model;
    appModel.set('playingVideo', clickedVideo);
  }
});
