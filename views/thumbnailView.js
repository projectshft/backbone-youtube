var ThumbnailViews = Backbone.View.extend({
  template: Handlebars.compile($('#video-thumbnail-template').html()),

  events: {
    'click .thumbnail': 'setMainVideo'
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },

  setMainVideo: function () {
    appModel.set('mainVideo', this.model)
  }
})