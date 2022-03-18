var VideoView = Backbone.View.extend({
  className: 'video',

  template: Handlebars.compile($('#main-video').html()),

  // initialize: function () {
  //   this.listenTo(this.model)
  // }

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }

});