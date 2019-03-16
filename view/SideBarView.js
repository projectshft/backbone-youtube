var SideBarView = Backbone.View.extend({
  className: 'videoBar',
  template: Handlebars.compile($('#sideVideoTemplate').html()),

  render: function() {
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    }
});