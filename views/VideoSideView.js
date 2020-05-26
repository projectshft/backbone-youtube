var VideoSideView = Backbone.View.extend({

  template: Handlebars.compile($('#video-side-template').html()),

  // JSON is replacing single quotes with &#39; - Needs to be fixed.
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
    }

})
