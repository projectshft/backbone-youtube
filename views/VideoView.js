const VideoView = Backbone.View.extend({
  className: 'video card',
  template: Handlebars.compile($(`#video-template`).html()),

  render() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});