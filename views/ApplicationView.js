const ApplicationView = Backbone.View.extend({
  el: $('.application-view'),

  events: {
    'click .btn': 'handleSearchClick',
    'click .view-video': 'viewMainVideo',
  },
  initialize() {
    this.$searchInput = this.$('.search-bar');
    this.listenTo(
      this.model.get('videos'),
      'reset',
      this.renderMainVideoDefault
    );
    this.listenTo(this.model.get('videos'), 'add', this.renderVideo);
    this.listenTo(
      this.model,
      'change:current_video',
      this.renderMainVideoOnClick
    );
  },
  handleSearchClick() {
    const searchValue = this.$searchInput.val();
    $('.main-video-container').empty();
    $('.video-list-container').empty();

    this.model.get('videos').updateUrl(searchValue);
  },
  renderVideo(video) {
    // New instance of VideoView //
    const videoView = new VideoView({ model: video });
    this.$('.video-list-container').append(videoView.render().el);
  },
  // Loading the main dummy Video //
  renderMainVideoDefault(video) {
    const mainVideoView = new MainVideoView({
      model: video.models[0],
    });
    this.$('.main-video-container').append(mainVideoView.render().el);
  },
  // Loading the main dummy Video on click //
  renderMainVideoOnClick(video) {
    this.$('.main-video').addClass('hide');
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
});
