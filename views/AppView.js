var AppView = Backbone.View.extend({
  el: $('body'),

  initialize: function () {
    var newSearchView = new SearchView();
    newSearchView.search();
  },
});
