var CurrentVideoView = Backbone.View.extend({
  className: 'current',

  //Handlebars template for HTML
  template: Handlebars.compile($('#current-template').html()),

  //render Template
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});
