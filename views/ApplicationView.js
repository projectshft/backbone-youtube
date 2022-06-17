const ApplicationView = Backbone.View.extend({
  el: $('.application-view'),

  events: {
    'click .btn': 'handleSearchClick',
  },
  initialize() {
    this.$searchInput = this.$('.search-bar');
    this.listenTo(this.model.get('videos'), 'add', this.renderVideo);
    this.renderVideos();
  },
  handleSearchClick() {
    const searchValue = this.$searchInput.val();
    // Dummy Data!!! //
    this.model
      .get('videos')
      .addVideo(
        'Fifty | Trail Running Film',
        'Fifty follows an amateur runner as he tackles his first ultra marathon in the mountains',
        'https://i.ytimg.com/vi/oEfstR7A7QY/default.jpg',
        'oEfstR7A7QY'
      );
  },
  renderVideo(video) {
    // New instance of VideoView //
    const videoView = new VideoView({ model: video });

    this.$('.video-list-container').append(videoView.render().el);
  },
  // Loading the dummy Videos //
  renderVideos() {
    this.model.get('videos').each((model) => {
      this.renderVideo(model);
    });
  },
});

// For Later when we hook up the API //
// this.model.get('videos').updateUrl(searchValue);
