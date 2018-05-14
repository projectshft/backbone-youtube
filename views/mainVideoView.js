var MainVideoView = Backbone.View.extend({
  constructor: function(model){
    this.model=model;
  },

  template: Handlebars.compile($("#main-display-template").html()),

  $el: $("#main-video-display"),

  render: function() {
    console.log(this.$el);
    this.$el.html(this.template(this.model)); //TODO: add .toJSON back once main.js is working properly
    return this;
  }

});

console.log("Here is main video view")
