var DetailView = Backbone.View.extend({
  className: 'detail-view-container',

  initialize: function () {
    this.renderDetailVideo();
  },

  template: Handlebars.compile($('.detail-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },

  renderDetailVideo: function () {
    this.$('.detail-col').append(this.render().el);
  }
})