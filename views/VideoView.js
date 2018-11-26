var VideoView = Backbone.View.extend({
  tagName: 'video',

  el:$("#video"),
  template: Handlebars.compile($('#video-template').html()),

  render: function () {
  this.$el.html(this.template(this.model));

     return this;
   }
});
