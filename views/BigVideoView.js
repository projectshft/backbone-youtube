var BigVideoView = Backbone.View.extend({

  template: Handlebars.compile($('#big-video-col-template').html()),

  className: 'big-vid',

  render: function () {
    this.$el.html(this.template(this.model.models[0].toJSON()));
    return this;
  }
})