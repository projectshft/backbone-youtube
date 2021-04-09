var VideoView = Backbone.View.extend({
  className: 'main-video',

  template: Handlebars.compile($('#video-template').html()),

  initialize: function () {
    this.listenTo(this.model, 'change:searchTerm', this.render);
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
});