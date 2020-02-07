var AppView = Backbone.View.extend({
  el: $('body'),

  initialize: function () {
    this.listenTo(this.model, "change:searchTerm", this.newSearch)
  },

  newSearch: function() {
    var searchTerm = this.model.get("searchTerm")
    this.model.get('videos').newVideosSearch(searchTerm)
  }
})
