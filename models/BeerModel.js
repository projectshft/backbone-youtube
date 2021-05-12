var BeerModel = Backbone.Model.extend({
  idAttribute: "_id",

  defaults: function () {
    return {
      name: "",
      style: "",
      abv: 0,
      image_url: "",
      editing: false,
      reviews: new ReviewsCollection(),
    };
  },

  toggleEditMode: function () {
    this.set("editing", !this.get("editing"));

    if (!this.get("editing")) {
      this.save();
    }
  },

  updateName: function (name) {
    this.set("name", name);
  },
});
