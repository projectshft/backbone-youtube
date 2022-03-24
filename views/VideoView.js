var VideoView = Backbone.View.extend({

  events: {
    'click .img': 'updateMainVideo'
  },

  initialize: function () {
    
    this.listenTo(this.model, 'change:isMainVideo', this.renderMainVideo);
  },

 

  renderMainVideo: function (mainVideo) {
    var mainVideoView = new MainVideoView({model: mainVideo});

    this.$('.main-video').append(mainVideoView.renderMain().el);
  },


  updateMainVideo: function () {
    this.model.set('isMainVideo', !this.model.get('isMainVideo'));
  },


  template: Handlebars.compile($('#video-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }

});