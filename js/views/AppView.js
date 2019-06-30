//top level view - handlers user input in search bar

var AppView = Backbone.View.extend({
  el: $('body'),
  events: {
    'click .search-button': 'newSearch',
    'keypress .search-input': 'checkForEnter',
    'click .view-video': 'changeMainVideo'
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
    //get main video model first since both render functions need to know what model to use/skip
    var mainVideoModel = this.model.get('main_video');
    this.renderMainVideo(mainVideoModel);
    //render rest of videos in sidebar, excluding main video
    this.renderSideVideos(mainVideoModel);
  },
  renderMainVideo: function(video) {
    console.log('Rendering main video');
    this.$mainVideo.empty();
    //make a new MainView, pass in main video as model
    var mainView = new MainVideoView({ model: video });
    //append the views render
    this.$mainVideo.append(mainView.render().el);
  },
  renderSideVideos: function(videoToOmit) {
    console.log('Rendering side videos');
    this.$sideVideos.empty();
    this.model.get('videos').each( function(video) {
      if (video === videoToOmit) {
        console.log('Video is already main video, skipping');
        return;
      }
      var sideVideoView = new SideVideoView({ model: video });
      this.$sideVideos.append(sideVideoView.render().el);
    }, this);
  },
  newSearch: function() {
    this.model.searchForVideos(this.$searchInput.val());
  },
  changeMainVideo: function(e) {
    var clickedVideoId = $(e.currentTarget).data().id;

    console.log(`User selected video with id "${clickedVideoId}"`);

    this.model.setMainVideo(clickedVideoId);
  },
  checkForEnter: function(e) {
    if (e.keyCode === 13)
      this.newSearch();
  }
});