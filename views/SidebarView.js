var SidebarView = Backbone.View.extend({
  className: 'video',

  template: Handlebars.compile($('#sidebar-template').html()),

  initialize: function () {
    this.listenTo(this.model, 'change:searchTerm', this.render);
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
});