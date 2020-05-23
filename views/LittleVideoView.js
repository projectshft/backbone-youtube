var LittleVideoView = Backbone.View.extend({

  template: Handlebars.compile($('#video-template').html()),

  initialize: function() {
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this
  }
});
