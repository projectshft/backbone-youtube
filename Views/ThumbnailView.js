var ThumbnailView = Backbone.View.extend({
  
  template: Handlebars.compile($('#thumbnail-column-template').html()),
  
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },

});