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

    this.listenTo(this.model.get('videos'), 'reset', this.renderPage)
  },
  renderPage: function() {
    this.renderMainVideo();
  },
  renderMainVideo: function() {
    console.log('Rendering main video');
  },
  renderVideos: function() {

  },
  newSearch: function() {
    this.model.searchForVideos(this.$searchInput.val());
  }
});