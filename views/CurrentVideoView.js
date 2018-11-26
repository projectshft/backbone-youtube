var CurrentVideoView = Backbone.View.extend({

  // className: 'currently-playing-video',

  template: Handlebars.compile($('#currently-playing-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }

});
