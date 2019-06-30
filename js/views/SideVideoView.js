var SideVideoView = Backbone.View.extend({
  //will need to handle click event to switch main video
  template: Handlebars.compile($('#side-video-template').html()),
  events: {},
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});