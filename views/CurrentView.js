var CurrentView = Backbone.View.extend({
  className: 'video',
  template: Handlebars.compile($('#current-video-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.attributes));

    return this;
  }



});
