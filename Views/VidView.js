var VidView = Backbone.View.extend({

  template: Handlebars.compile($('#video-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },

});



