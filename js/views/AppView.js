//top level view - handlers user input in search bar

var AppView = Backbone.View.extend({
  el: $('body'),
  events: {
    'click .search-button': 'newSearch'
  },
  initialize: function() {
    this.$searchInput = this.$('#search-input');
    this.$mainVideo = this.$('#main-video');
    this.$sideVideos = this.$('#sidebar-videos');
  },
  renderPage: function() {

  },
  newSearch: function() {
    this.model.searchForVideos(this.$searchInput.val());
  }
});