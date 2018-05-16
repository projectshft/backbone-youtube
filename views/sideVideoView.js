var SideVideoView = Backbone.View.extend({
  initialize: function(model){
    this.model = model;
  },
  template: Handlebars.compile($("#side-video-template").html()),

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }
});
