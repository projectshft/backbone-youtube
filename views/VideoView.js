var VideoView = Backbone.View.extend({

  // className: 'video',

  template: Handlebars.compile($('#additional-videos-template').html()),

  render: function() {

  

    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }


});
