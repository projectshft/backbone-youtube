//the mainVideoView belongs to the videoMode and renders the Handlebars template
var MainVideoView = Backbone.View.extend({
  //creates a new element with the class main-video to bind to the el
  className: 'main-video',

  template: Handlebars.compile($('#main-video-template').html()),


  render: function() {

    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});
