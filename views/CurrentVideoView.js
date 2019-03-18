var CurrentVideoView = Backbone.View.extend({
  className: 'video',

  template: Handlebars.compile($('#current-video-template').html()),

  render: function () {
    // Use a try catch to render an error page if
    // the response contains no results 
    try {
      $('.error').css('display', 'none');
      this.$el.html(this.template(this.model.toJSON()));
    } catch {
      $('.error').css('display', 'block');
    }
    return this;
  }
});
