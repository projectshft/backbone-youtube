var VideoView = Backbone.View.extend({
  template: Handlebars.compile($("#video-template").html()),

  render: function () {
    debugger;
    this.$el.html(this.template(this.model.toJSON()));
    debugger;
    return this
  }
})