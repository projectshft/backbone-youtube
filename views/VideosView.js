var VideosView = Backbone.View.extend({
  className: 'v-search-result',
  
  template: Handlebars.compile($('#v-search-result-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});