var BigVideoView = Backbone.View.extend({

  template: Handlebars.compile($('#big-video-col-template').html()),

  events: {
    'click .btn': 'deleteVideos',
  },

  initialize: function ( ) {
    this.listenTo(this.model, 'remove', this.remove)
  },

  deleteVideos: function () {
    this.model.destroy();
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
})