var MainVideoView = Backbone.View.extend({
  events: {},

  initialize: function () {},

  template: Handlebars.compile($("#main-video-template").html()),

  render: function () {
    this.$el.html(this.template(this.model));

    return this;
  },
});
