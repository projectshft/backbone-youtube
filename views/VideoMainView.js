var VideoMainView = Backbone.View.extend({
  className: 'video',

  template: Handlebars.compile($('#video-main-template').html()),

  // JSON is replacing single quotes with &#39; - Needs to be fixed.
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }

})
