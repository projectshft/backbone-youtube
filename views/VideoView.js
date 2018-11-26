var VideoView = Backbone.View.extend({


  template: Handlebars.compile($('#additional-videos-template').html()),

  render: function() {



    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }


});
