var SidebarView = Backbone.View.extend({
  template: Handlebars.compile($("#sidebar-template").html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
})
