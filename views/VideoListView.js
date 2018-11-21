var VideoListView = Backbone.View.extend({
  model: VideoModel,
  template: Handlebars.compile($('#video-list-view-template').html()),
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
})
