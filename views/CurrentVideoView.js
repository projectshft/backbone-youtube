var CurrentVideoView = Backbone.View.extend({
  className: 'video',

  template: Handlebars.compile($('#current-video-template').html()),

  render: function () {
    try {
      $('.error').css('display', 'none');
      this.$el.html(this.template(this.model.toJSON()));
    } catch {
      $('.error').css('display', 'block');
    }
    return this;
  }
});
