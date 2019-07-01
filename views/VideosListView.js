//View that will contain the videos list
var VideosListView = Backbone.View.extend({
  template: Handlebars.compile($('#video-list-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
})
