var VideoView = Backbone.View.extend({
  tagName: 'li',

  className: 'side-video rounded',

  template: Handlebars.compile($('#sidebar-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
});
