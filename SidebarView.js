SidebarView = Backbone.View.extend({

  el: '#video-sidebar',

  template: Handlebars.compile($('.side-videos-area').html()),


  render: function () {
  this.$el.html(this.template(this.model.toJSON()));

  this.$nameInput = this.$('.edit-mode');

  return this;
}


});
