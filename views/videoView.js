var VideoView = Backbone.View.extend({
  className: 'video',

  template: {
    // Handlebars.compile($('#iframe').html()),
    // Handlebars.compile($('#video-info').html())
  },

  events: {

  },

  initialize: function () {
    // this.listenTo(this.model, 'destroy', this.remove);
    // this.listenTo(this.model, 'change:edit_mode', this.renderEdit);
    // this.listenTo(this.model, 'change:name', this.render);
  },

  render: function () {
    console.log('invoked videoView render');
    // this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});
