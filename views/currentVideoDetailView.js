var CurrentVideoDetailView = Backbone.View.extend({
  template: Handlebars.compile($('#current-video-template').html()),

  render: function(currentVideoModel) {
    this.$el.html(this.template(currentVideoModel.toJSON()));

    return this;
  }
});
