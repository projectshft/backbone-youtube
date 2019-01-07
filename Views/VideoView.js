var VideoView = Backbone.View.extend({
  className: 'next-video',
  template: Handlebars.compile($('#up-next-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
})
