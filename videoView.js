var VideoView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .submit-search': 'searchVids'
  },
  initialize: function () {
    this.$videoName = this.$('#name-input');
    this.$styleInput = this.$('#style-input');
    this.$abvInput = this.$('#abv-input');
    this.$imgUrl = this.$('#img-input');

    this.$beerList = this.$('.beer-list');

    this.listenTo(this.model.get('beers'), 'add', this.addBeer);

    this.renderBeers();

})
