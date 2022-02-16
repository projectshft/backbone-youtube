var MainVideoView = Backbone.View.extend({
  className: 'video-main',

  template: Handlebars.compile($('#main-video-template').html()),

  render: function () {

    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
})