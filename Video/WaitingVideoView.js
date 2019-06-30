var WaitingVideoView = Backbone.View.extend({
  template: Handlebars.compile($('#waiting-video-template').html()),

  renderQueue: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

});
