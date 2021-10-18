var CurrentVideoView = Backbone.View.extend({
  // el: $('current-video-container'),

  template: Handlebars.compile($('#current-video-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }

})


// https://www.youtube.com/embed/P6N9782MzFQ

