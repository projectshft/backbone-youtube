var MainVideoView = Backbone.View.extend({
  tagname: "main-video",

  template: Handlebars.compile($("#main-vid-template").html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
});
