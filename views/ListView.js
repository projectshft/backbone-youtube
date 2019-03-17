var listView = Backbone.view.extend({
  el: $('.viewVideo'),
  template: Handlebars.compile($('#list-template').html()),
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
});
