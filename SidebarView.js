SidebarView = Backbone.View.extend({
  el: '#video-sidebar',

  template: Handlebars.compile($('.side-videos-area').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }


});
