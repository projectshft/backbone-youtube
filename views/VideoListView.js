const VideoListView = Backbone.View.extend({
  className: 'video-list-item',
  el: 'li',
  template: Handlebars.compile($(`#video-list-template`)),

  render() {
    this.$el.html(this.template(this.model.toJSON())); // 4 videos
    return this;
  }
});