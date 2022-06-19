const ApplicationView = Backbone.View.extend({
  el: $('.application-view'),

  events: {
    'click .btn': 'handleSearchClick',
    'click .view-video': 'viewMainVideo',
  },
  initialize() {
    this.$searchInput = this.$('.search-bar');
    this.listenTo(this.model.get('videos'), 'add', this.renderVideo);
    this.listenTo(
      this.model,
      'change:current_video',
      this.renderMainVideoOnClick
    );
    // List of 5 videos //
    this.renderVideos();
    // Main video default //
    this.renderMainVideoDefault(applicationModel.get('videos').models[0]);
  },
  handleSearchClick() {
    const searchValue = this.$searchInput.val();
    // For Later when we hook up the API //
    // this.model.get('videos').updateUrl(searchValue);
  },
  renderVideo(video) {
    // New instance of VideoView //
    const videoView = new VideoView({ model: video });

    this.$('.video-list-container').append(videoView.render().el);
  },
  // Loading the main dummy Video //
  renderMainVideoDefault(video) {
    const mainVideoView = new MainVideoView({
      model: video,
    });
    this.$('.main-video-container').append(mainVideoView.render().el);
  },
  // Loading the main dummy Video on click //
  renderMainVideoOnClick(video) {
    const mainVideoView = new MainVideoView({
      model: video.attributes.current_video,
    });
    this.$('.main-video-container').append(mainVideoView.render().el);
  },

  // Loading the dummy Videos //
  renderVideos() {
    this.model.get('videos').each((model) => {
      this.renderVideo(model);
    });
  },
  // Updating the main video //
  viewMainVideo(video) {
    const clickedVideo = $(video.currentTarget).data().id;
    this.model.updateCurrentVideo(clickedVideo);
  },
  hideMainVideo() {},
});

// For Later when we hook up the API //
// this.model.get('videos').updateUrl(searchValue);
