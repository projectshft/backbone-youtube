//single video (selected video) shown in an iframe element
var VideoMainView = Backbone.View.extend({
  model: VideoModel,
  template: Handlebars.compile($('#video-main-view-template').html()),
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
})
