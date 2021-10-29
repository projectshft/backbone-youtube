var VidView = Backbone.View.extend({
  className: 'videos',

  template: Handlebars.compile($('#video-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },

});



