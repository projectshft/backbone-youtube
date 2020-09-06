console.log('inVideoMainView');

var VideoMainView = Backbone.View.extend({
  className: 'main-video-container',
  template: Handlebars.compile($('#video-main-template').html()),

  render: function (currentVideo) {
    console.log('rendering Current!');
    this.$el.html(this.template(currentVideo));
    console.log('logging this')
    console.log(this);
    return this;
  },
});

