var SmallVideoView = Backbone.View.extend({

  template: Handlebars.compile($('#small-video-col-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
})