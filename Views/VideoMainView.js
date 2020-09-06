console.log('inVideoMainView');

var VideoMainView = Backbone.View.extend({
  className: 'main-video-container',
  template: Handlebars.compile($('#video-main-template').html()),

  render: function (currentVideo) {
    console.log('rendering Current!');
    this.$el.html(this.template(currentVideo[0]));
    return this;
  },
});

