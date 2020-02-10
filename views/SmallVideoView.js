var SmallVideoView = Backbone.View.extend({

  className: 'video',

  template: Handlebars.compile($('#video-sidebar-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
