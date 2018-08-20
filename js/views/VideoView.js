var VideoView = Backbone.View.extend({

  // class: '.related-videos-list',

  //cache the template function for a single item
  template: Handlebars.compile($('#video-template').html()),


  //tell VideoView to render templates when the VideoModel is changed

  initialize: function() {
    this.listenTo(this.model, 'change', this.render)
  },

  //replacing the HTML of
  // a DOM element with the result of instantiating a
  // template with the model's attributes.

  render: function() {
    $(this.el).html(this.template((this.model).attributes));
    console.log(this);
    return this
  }

});
