
var VideoView = Backbone.View.extend({
  className: 'video',

  template: Handlebars.compile($('#video-thumbnail-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },
});
