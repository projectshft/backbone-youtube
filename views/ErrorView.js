var ErrorView = Backbone.View.extend({
  
  template: Handlebars.compile($('#error-template').html()),

  render() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
})