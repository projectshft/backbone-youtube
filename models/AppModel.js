var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      beers: new BeersCollection(),

      current_beer: null,

      // either true or false
      show_reviews: false,
    };
  },
  
  showReviews: function () {
    this.set("show_reviews", true);
  },

  updateCurrentBeer: function (id) {
    var allBeers = this.get("beers");
    var currentBeer = allBeers.findWhere({ _id: id });

    this.set("current_beer", currentBeer);
  },

  showBeers: function () {
    this.set("show_reviews", false);
  },
});
