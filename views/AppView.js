var AppView = Backbone.View.extend({
  el: $("body"),

  events: {
    "click #search-button": "searchYouTube",
  },

  initialize: function () {
    this.$searchInput = this.$("#search-input");
  },

  searchYouTube: function () {
    console.log(this.$searchInput.val());
  },
});
