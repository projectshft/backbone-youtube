var VideoMainView = Backbone.View.extend({
  className: 'video',

  template: Handlebars.compile($('#video-main-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }

  // initialize: function () {
  //   this.listenTo(this.model, 'change:current_video', this.displayVideo);
  // },

  // displayVideo: function () {
  //   //
  // }

})
