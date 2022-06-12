var VideoSelectedView = Backbone.View.extend({
  className: 'v-selected',
  
  template: Handlebars.compile($('#v-selected-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});