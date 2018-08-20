VideoView = Backbone.View.extend({
  el: $('#video-posts'),

  template: Handlebars.compile($('#video-sidebar').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});
