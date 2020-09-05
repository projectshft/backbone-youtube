var VideoMainView = Backbone.View.extend({
  // className: 'video-view',
  template: Handlebars.compile($('#video-main-template').html()),

  render: function () {
    this.$el.html(
      this.template(appModel.get('videosCollection').at(0).toJSON())
    );

    return this;
  },
});

// console.log('rendering!');
// console.log(appModel.get('videosCollection').at(0));
// console.log('was that the first video?');
// console.log(appModel.get('videosCollection').at(0).toJSON());

// // console.log(this.model.toJSON());
// console.log('wat was that?')
// console.log(this.model);
