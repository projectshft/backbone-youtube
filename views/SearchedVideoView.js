
var SearchedVideoView = Backbone.View.extend({
  className: 'test',

  template: Handlebars.compile($('#searched-video-template').html()),

  render: function () {

    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
})
