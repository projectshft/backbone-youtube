const ThumbnailView = Backbone.View.extend({

  $el: $(".thumbnails-container"),

  template: Handlebars.compile($("#thumbnail-view-template").html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
})