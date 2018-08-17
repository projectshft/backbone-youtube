var BeerView = Backbone.View.extend({
  className: 'video',

  template: {
    // Handlebars.compile($('#iframe').html()),
    // Handlebars.compile($('#video-info').html())
  },

  // events: {
  // },

  // initialize: function () {
  // },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    this.$nameInput = this.$('.edit-mode');

    return this;
  }
});
