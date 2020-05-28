var MainVideoView = Backbone.View.extend({

  template: Handlebars.compile($('#main-video-template').html()),

  render: function () {
    // console.log('this is rendering the main video')
    this.$el.html(this.template(this.model.toJSON()));
    // console.log(this)
    // debugger;
    return this;
  }

});
