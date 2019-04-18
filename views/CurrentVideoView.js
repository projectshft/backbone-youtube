var CurrentVideoView = Backbone.View.extend({
  //sets the VideoListView's el's classname to '.currentVideoView' for future reference
  className: 'currentVideoView',

  //using JQuery's .html method to select our template and convert it to an HTML string in our JavaScript. Handlebars' compile function returns a new function that we will use to fill our HTML in with our JSON data
  template: Handlebars.compile($('#current-video-template').html()),

  render: function() {
    // $el is a cached JQuery object for the view's element (a div container we've given the class name of '.videoList'). We use JQuery's .html() method to write new HTML. Inside the parenthesis we reference this object's template key which is a function. We pass this object's model into that function as an argument AFTER converting it to JSON.
    this.$el.html(this.template(this.model.toJSON()))
    //we return this at the end of the render to enable chained calls.
    return this
  }
})
