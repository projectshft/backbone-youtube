var ListView = Backbone.View.extend({
  id: 'list-view',

  template: Handlebars.compile($('#list-template').html()),

  initialize: function() {
    console.log('list view initialized')
    this.listenTo(this.model, 'change', this.render);
 },

 render: function() {
   this.$el.html(this.template(this.model));
   return this;
 }

})
listView = new ListView();
