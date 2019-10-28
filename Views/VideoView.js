var VideoView = Backbone.View.extend({
  className: 'video-list',

  template: Handlebars.compile($('#beer-template').html()),

  events: {
    'click': 'renderMainVideo',
  },

  initialize: function () {
    this.listenTo(this.model, 'change:mainVideo', this.renderMainVideo);
    debugger;
    this.listenTo(this.model, 'change:name', this.render);
  },



  renderMainVideo: function () {
    var currentMainVideo = appModel.get('videos').findWhere({mainVideo:true})
    if (currentMainVideo){
    currentMainVideo.set('mainVideo', false);
  }

  }
});

