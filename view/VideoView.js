var VideoView = Backbone.View.extend({
  className: 'video',
  template: Handlebars.compile($('#videoTemplate').html()),

  render: function() {
    var firstVideo = this.model.collection.at(0);
    this.$el.html(this.template(firstVideo.toJSON()));
    return this;
  }

});