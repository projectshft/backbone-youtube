var centralView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #search-button': 'searchQuery'
  },

  initialize: function () {

  },

  searchQuery: function () {

      search = $('#search-bar').val(),
      console.log(search);
  },

});
