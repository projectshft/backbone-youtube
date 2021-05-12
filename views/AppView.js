var AppView = Backbone.View.extend({
  el: $("body"),

  events: {
    "click .submit-beer": "createBeer",
    "click .view-beer": "viewBeer",
    "click .back": "goBack",
  },

  detailView: null,

  initialize: function () {
    this.listenTo(this.model.get("beers"), "add", this.renderBeer);
    this.listenTo(this.model, "change:show_reviews", this.renderPage);
    this.listenTo(this.model, "change:current_beer", this.renderDetailView);
    this.listenTo(this.model.get("beers"), "reset", this.renderBeers);

    this.renderBeers();
  },

  viewBeer: function (e) {
    var clickedBeerId = $(e.currentTarget).data().id;

    this.model.showReviews();
    this.model.updateCurrentBeer(clickedBeerId);
  },

  createBeer: function () {
    this.model
      .get("beers")
      .addBeer(
        this.$("#name-input").val(),
        this.$("#style-input").val(),
        this.$("#abv-input").val(),
        this.$("#img-input").val()
      );
  },

  goBack: function () {
    this.model.showBeers();
  },

  renderDetailView: function () {
    if (this.detailView) {
      this.detailView.remove();
    }

    this.detailView = new BeerDetailView({
      model: this.model.get("current_beer"),
    });

    this.$(".reviews-container").append(this.detailView.render().el);

    this.detailView.renderReviews();
  },

  renderPage: function () {
    this.$(".reviews-container").toggleClass(
      "show",
      this.model.get("show_reviews")
    );
    this.$(".beers-container").toggleClass(
      "show",
      !this.model.get("show_reviews")
    );
  },

  renderBeer: function (beer) {
    var beerView = new BeerView({ model: beer });
    this.$(".beer-list").append(beerView.render().el);
  },

  renderBeers: function () {
    this.model.get("beers").each(function (m) {
      this.renderBeer(m);
    }, this);
  },
});
