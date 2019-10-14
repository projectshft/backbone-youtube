var OtherVidView = Backbone.View.extend({
  className: 'video-queue',

  template: Handlebars.compile($('#preview-template').html()),

  initialize: function() {
    this.listenTo(this.model, 'change:name', this.render);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});
