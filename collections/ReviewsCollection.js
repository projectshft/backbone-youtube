var ReviewsCollection = Backbone.Collection.extend({
  model: ReviewModel,

  addReview: function (name, notes) {
    this.add({
      name: name,
      notes: notes,
    });
  },
  
  url: "",

  updateUrl: function (id) {
    this.url = "https://new-beers.herokuapp.com/beers/" + id + "/reviews";
  },
});