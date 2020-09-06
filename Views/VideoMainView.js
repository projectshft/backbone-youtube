var VideoMainView = Backbone.View.extend({
  className: 'main-video-container',
  template: Handlebars.compile($('#video-main-template').html()),

  render: function () {
    console.log(this);
    this.$el.html(this.template(this.model));

    return this;
  },
});

