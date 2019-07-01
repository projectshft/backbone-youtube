//View for the main video
var MainVideoView = Backbone.View.extend({
  template: Handlebars.compile($('#main-video-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
})
