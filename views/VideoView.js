var VideoView = Backbone.View.extend({
  className: $('#mainVideo'),

  template: Handlebars.compile($('#video-template').html()),


  initialize: function() {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function() {
    this.$el.html(this.template(this.model));
    return this;
  }


});
