var CurrentVideoView = Backbone.View.extend({
  className: 'current',

  template: Handlebars.compile($('#current-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

	//Handlebars template for HTML

	//render Template

	//click event to update current View with clicked video

	//toggle current

	//initialize- listen to model for update current video


});
