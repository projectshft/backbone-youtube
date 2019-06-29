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

    //below is commented out - main video will be changed on reset so not necessary. uncommenting = double rendering on first load
    //this.listenTo(this.model.get('videos'), 'reset', this.renderPage);
    this.listenTo(this.model, 'change:main_video', this.renderPage);
  },
  renderPage: function() {
    this.renderMainVideo();
    //render rest of videos in sidebar, excluding main video
  },
  renderMainVideo: function() {
    console.log('Rendering main video');
    this.$mainVideo.empty();
    //make a new MainView, pass in main video as model
    var mainView = new MainVideoView({ model: this.model.get('main_video') });
    //append the views render
    this.$mainVideo.append(mainView.render().el);
  },
  renderVideos: function() {

  },
  newSearch: function() {
    this.model.searchForVideos(this.$searchInput.val());
  }
});