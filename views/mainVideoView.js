var MainVideoView = Backbone.View.extend({

  className: 'large-video',

  template: Handlebars.compile($('#main-video-template').html()),

  initialize: function () {
    this.listenTo(this.model, 'change:current-video', this.render);

    this.model.get('current_video')
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});
