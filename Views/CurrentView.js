var CurrentView = Backbone.View.extend({
  className: 'current-video-info',
  template: Handlebars.compile($('#video-description-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});
