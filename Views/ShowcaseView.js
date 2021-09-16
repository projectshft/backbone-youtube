var ShowcaseView = Backbone.View.extend({
  el: $('#showcase'),
  
  template: Handlebars.compile($('#showcase-template').html()),
  
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },

});