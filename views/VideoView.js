var VideoView = Backbone.View.extend ({
  id: 'video-view',

  template: Handlebars.compile($('#video-template').html()),

  initialize: function() {
   this.listenTo(this.model, 'change', this.render);
 },

 render: function() {
   this.$el.html(this.template(this.model));
   return this;
 }

})
