// Dynamic View for the Videos //
const VideoView = Backbone.View.extend({
  className: 'videos',

  template: Handlebars.compile($('#video-list-template').html()),

  render() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
});
