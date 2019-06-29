var PlayingVideoView = Backbone.View.extend({
  template: Handlebars.compile($('#current-video-template').html()),

  //render, called from AppView's renderVideo function
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
