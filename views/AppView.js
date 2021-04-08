var AppView = Backbone.View.extend({
  el: ".app",

  events: {
    "click .submit-search": "handleSearchButtonClick",
  },

  //On search button click, sends the inputted search term to appModel to fetch data for
  handleSearchButtonClick: function () {
    var searchTerm = this.$(".search-input").val();
    this.model.get("videos").searchVideos(searchTerm);
  }

});