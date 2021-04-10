var MainVideoView = Backbone.View.extend({
  className: 'main-videos-inner',

  template: Handlebars.compile($('#main-video-template').html()),

  render: function () {
    this.$el.html(this.template(this.model));

    return this;
  }
})