var SuggestedVideosView = Backbone.View.extend({
  template: Handlebars.compile($("#suggested-video-template").html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },
});
