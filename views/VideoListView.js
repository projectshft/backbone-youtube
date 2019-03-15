var VideoListView = Backbone.View.extend({
	className: 'list',

  //template for Handlebars
  template: Handlebars.compile($('#list-template').html()),

  //render template
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});
