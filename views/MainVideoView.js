var MainVideoView = Backbone.View.extend({
  el: $('.main-video'),

  template: Handlebars.compile($('#main-video-template').html()),

  renderMain: function() {
    
    this.$el.html(this.template(this.model.toJSON()));

   console.log(this);
  }
});