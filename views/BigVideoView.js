var BigVideoView = Backbone.View.extend({

  template: Handlebars.compile($('#big-video-col-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
})