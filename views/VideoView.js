const VideoView = Backbone.View.extend({
  className: 'video',
  template: Handlebars.compile($(`#video-template`)),

  render() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});