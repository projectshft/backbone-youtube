var VideoView = Backbone.View.extend({

  className: 'list-group-item',

  template: Handlebars.compile($('#additional-videos-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    console.log(this)
    return this;
  }


});
