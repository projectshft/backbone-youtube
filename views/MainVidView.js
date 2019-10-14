var MainVidView = Backbone.View.extend({
  className: '.main-video',

  template: Handlebars.compile($('#main-template').html()),

  initialize: function() {
    this.listenTo(this.model, 'change:name', this.render);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    this.$nameInput = this.$('.edit-mode');

    return this;
  }
});
