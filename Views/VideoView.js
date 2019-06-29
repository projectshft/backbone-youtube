var VideoView = Backbone.View.extend({

  template: Handlebars.compile($('#column-videos-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.get('videos').models.attributes));

    return this;
  }
});
