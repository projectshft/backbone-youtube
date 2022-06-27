const AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search': 'findVideos',
    'click .item-container': 'changeVideoPlayer',
  },

  initialize() {
    this.model.get('videos').updateUrl('javascript');
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideoPlayer);
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideoList);
    this.listenTo(this.model, 'change:iframeVideo', this.renderVideoPlayer);
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
    let currentVideoId = this.model.get('iframeVideo');
    //On initial page load iframeVideo is null, so check for this to avoid null being set as the id
    if (!currentVideoId) {
      currentVideoId = this.model.get('videos').models[0].id;
    }
    const currentVideo = _.find(this.model.get('videos').models, function (item) {
      return item.id === currentVideoId;
    });
    const videoPlayer = new VideoPlayerView({ model: currentVideo });
    this.$('.player-container').html('');
    this.$('.player-container').append(videoPlayer.render().el);
  },

  renderVideoList() {
    this.$('.list-container').html('');
    this.model.get('videos').each(function (video) {
      const videoListItem = new VideoListView({ model: video});
      this.$('.list-container').append(videoListItem.render().el);
    });
  },

  changeVideoPlayer(e) {
    const clickedVideoId = $(e.currentTarget).data().id;
    this.model.updateIframeVideo(clickedVideoId);
  },
});