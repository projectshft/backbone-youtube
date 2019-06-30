var SideVideoView = Backbone.View.extend({
  //click event will be handled in AppView - needs access to main_video in AppModel
  template: Handlebars.compile($('#side-video-template').html()),
  
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});