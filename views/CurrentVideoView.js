/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const CurrentVideoView = Backbone.View.extend({
  className: 'current-video',

  template: Handlebars.compile($('#current-video-template').html()),

  render() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },
});
