//the smallVideoView belongs to the videoModel
//and contains each of the 5 small video views and renders the Handlebars template

var SmallVideoView = Backbone.View.extend({
  //generates a new element with a new class to bind to the el
  //the DOM element for the small video div with the class of video
  className: 'video',

  template: Handlebars.compile($('#video-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});
