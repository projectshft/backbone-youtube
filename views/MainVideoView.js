var MainVideoView = Backbone.View.extend({
  className: '',

  template: Handlebars.compile($('#main-video-template').html()),

  render: function () {
    console.log('this is rendering the main video')

    this.$el.html(this.template(this.model));
    console.log(this)
    // debugger;
    return this;
  }

});
