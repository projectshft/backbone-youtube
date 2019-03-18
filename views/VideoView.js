var VideoView = Backbone.View.extend({

  template: Handlebars.compile($('#list-template').html()),

  render: function() {

    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }


});
