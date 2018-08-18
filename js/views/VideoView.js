var VideoView = Backbone.View.extend({

//cache the template function for a single item
  template: Handlebars.compile($('#video-template').html()),

//replacing the HTML of
// a DOM element with the result of instantiating a
// template with the model's attributes.

  render: function (){
    this.el.html(this.template(this.model.toJSON()));
    console.log(this);
    return this;
  }

});
