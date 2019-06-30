var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search-button': "searchVideos",
  },

  initialize: function() {
    this.$searchInput = this.$('search-input')
  },

  searchVideos: function() {
    this.model.search()
    $('#search-input').val("")
  },
})
