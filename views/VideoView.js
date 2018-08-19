//Create a view that renders the videos to the page

var VideoView = Backbone.View.extend({
  template: Handlebars.compile($('#video-player-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
