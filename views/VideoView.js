var VideoView = Backbone.View.extend({
  className: '',

  template: Handlebars.compile($('#video-list-template').html()),

  render: function () {
    console.log('this is rendering the video list')

    this.$el.html(this.template(this.model));
    console.log(this)
    // debugger;
    return this;
  }

});
