var AppView = Backbone.View.extend({
  el: $('body'),

  initialize: function() {
    this.$searchInput = this.$('#search-query');
  },

  events: {
    'click .search': 'ytSearch'
  },

  ytSearch: function() {
    var query = this.$searchInput.val();
    console.log(this.model.get('videos').fetch({data: { q: query}}))
  }
})