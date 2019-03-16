const AppView = Backbone.View.extend({

  el: $("body"),

  // When the 'search' button is clicked, grab the value in the input box
  events: {
    "click #search-button" : "getSearchQuery"
  },

  getSearchQuery: function () {
    const searchQuery = $("#search-input").val();
    this.model.get("videos").fetchVideoData(searchQuery);
  }

});