var VideoSideView = Backbone.View.extend({

  template: Handlebars.compile($('#video-side-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
    }

})
