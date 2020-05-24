var LittleVideoView = Backbone.View.extend({

  template: Handlebars.compile($('#video-template').html()),

  initialize: function() {
  },

  //interacts with AppView renderVideo(s) functions
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this
  }
});
