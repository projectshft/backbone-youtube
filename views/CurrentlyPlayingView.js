var CurrentlyPlayingView = Backbone.View.extend({

  template: Handlebars.compile($('#current-video-template').html()),

  initialize: function() {

  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this
  }
});
