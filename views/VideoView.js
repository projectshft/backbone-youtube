var VideoView = Backbone.View.extend({
  className: 'video',

  template: Handlebars.compile($('#video-list-template').html()),

  render: function () {
    console.log('this is rendering')
    this.$el.html(this.template(this.model.toJSON()));

    // console.log(this)
    return this;
  }

});
