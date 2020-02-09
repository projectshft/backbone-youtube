var VideoView = Backbone.View.extend({

  template: Handlebars.compile($('#video-template').html()),

  //use different template for displaying the player???
  

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
        //console.log('this is the video model', this.model.toJSON());
    return this;
  }
});