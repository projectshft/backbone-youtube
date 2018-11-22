const VideoListView = Backbone.View.extend({
  className: 'video-list-item mb-3',
  template: Handlebars.compile($(`#video-list-template`).html()),

  render() {
    this.$el.html(this.template(this.model.toJSON())); // 4 videos
    return this;
  }
});