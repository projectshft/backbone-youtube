var VideoView = Backbone.View.extend({
  el: $('.videosList'),
  className: 'video',
  tagName: 'li',

  template: Handlebars.compile($('#video-template').html()),

  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
})