const VideoListView = Backbone.View.extend({
  className: 'video-list-item',
  template: Handlebars.compile($(`#video-list-template`).html()),

  render() {
    this.$el.html(this.template(this.model.toJSON())); // 4 videos
    return this;
  }
});