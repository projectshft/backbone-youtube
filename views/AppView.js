const AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search': 'findVideos',
  },

  initialize() {
    this.model.get('videos').updateUrl('javascript');
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideoPlayer);
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideoList);
  },

  findVideos() {
    if (!this.$('#search-query').val()) {
      return alert('Please enter a search term');
    }

    const query = this.$('#search-query').val();
    this.model.get('videos').updateUrl(query);

    this.$('#search-query').val('');
  },

  renderVideoPlayer() {
    const currentVideo = this.model.get('videos').models[0];
    const videoPlayer = new VideoPlayerView({ model: currentVideo });
    this.$('.player-container').append(videoPlayer.render().el);
  },

  renderVideoList() {
    this.model.get('videos').each(function (video) {
      const videoListItem = new VideoListView({ model: video});
      this.$('.list-container').append(videoListItem.render().el);
    });
  },
});