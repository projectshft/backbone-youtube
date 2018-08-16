var VideoPlayerView = Backbone.View.extend({
  el: '.video-player',

  template: Handlebars.compile($('#video-player-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});
