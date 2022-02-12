//Setting up values that make up each individual video model. Honestly I don't think I needed a return function here but used it anyway.
var VideoModel = Backbone.Model.extend({
  defaults: function () {
    return {
      id: "",
      title: "",
      description: "",
      bigUrl: "",
    };
  },
});
