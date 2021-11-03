var MainVidView = Backbone.View.extend({
  el: $('#active-video'),
  
  template: Handlebars.compile($('#active-template').html()),
  
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },

});