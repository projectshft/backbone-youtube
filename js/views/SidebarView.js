//SidebarView is called whenever a new search is made
//Makes sidebar representation of a youtube video
//which includes its thumbnail and title
var SidebarView = Backbone.View.extend({
  template: Handlebars.compile($("#sidebar-template").html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
})
