/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const VideoThumbnailView = Backbone.View.extend({
  template: Handlebars.compile($('#video-thumbnail-template').html()),

  render() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },
});
