var SidebarVideoView = Backbone.View.extend({
  tagname: "sidebar-vid",

  template: Handlebars.compile($("#side-vid-template").html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
});
