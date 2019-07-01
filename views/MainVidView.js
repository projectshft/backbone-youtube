// shows the videos in the main-vid-template
var MainVidView = Backbone.View.extend({
  className: 'main-vid',

  template: Handlebars.compile($('#main-vid-template').html()),
  // render the view in the html
  render: function(){
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});
