var CurrentVideoView = Backbone.View.extend({
  className: 'current-video',

  template: Handlebars.compile($('#current-video-template').html()),

  events: {

  },

  initialize: function () {
    // this.listenTo(this.model, 'destroy', this.remove);
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
