var BeerDetailView = Backbone.View.extend({
  className: "reviews-container-inner",

  template: Handlebars.compile($("#beer-detail-template").html()),

  initialize: function () {
    this.listenTo(this.model.get("reviews"), "add", this.renderReview);
  },

  events: {
    "click .submit-review": "createReview",
  },

  createReview: function () {
    this.model
      .get("reviews")
      .addReview(
        this.$("#review-name-input").val(),
        this.$("#review-notes-input").val()
      );
  },

  renderReview: function (review) {
    var reviewView = new ReviewView({ model: review });
    this.$(".review-list").append(reviewView.render().el);
  },

  renderReviews: function () {
    this.model.get("reviews").each(function (m) {
      this.renderReview(m);
    }, this);
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  },
});
