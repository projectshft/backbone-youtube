let FeaturePlayerView = Backbone.View.extend({
  // necessary key-value pairs,

  // compile the Handlebars template
  template: Handlebars.compile($('#feature-template').html()),

  // render as key, rendering function as value
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});

/***********************************************
    FROM: beer-review-backbone(master) 
************************************************/
// var ReviewView = Backbone.View.extend({
//   className: 'review',

//   template: Handlebars.compile($('#review-template').html()),

//   render: function () {
//     this.$el.html(this.template(this.model.toJSON()));

//     return this;
//   }
// });
