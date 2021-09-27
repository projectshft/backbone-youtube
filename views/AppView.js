var AppView = Backbone.View.extend({
  el: 'body',

  initialize: function () {
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
    this.listenTo(this.model, 'change:current_video', this.renderCurrentVideo);
  },

  events: {
    'click .search': 'handleSearch',
    'click .video-img': 'handleCurrentVideoUpdate'
  },

  currentVideoView: null,

  handleSearch: function () {
    var newQuery = this.$('#search-query').val().replaceAll(' ', '%20');

    this.model.get('videos').searchForVideos(newQuery);

    this.$('#search-query').val('');
  },

  handleCurrentVideoUpdate: function (e) {
    var clickedVideoId = $(e.currentTarget).data().id;

    this.model.updateCurrentVideo(clickedVideoId);
  },

  renderCurrentVideo: function () {
    if (this.currentVideoView) {
      this.currentVideoView.remove();
    }

    this.currentVideoView = new CurrentVideoView({ model: this.model.get('current_video')});

    this.$('.current-video-container').append(this.currentVideoView.render().el);
  },

  renderVideo: function (video) {
    var videoView = new VideoView({ model: video });

    this.$('.videos-container').append(videoView.render().el);
  },

  renderVideos: function () {
    this.$('.videos-container').empty();

    this.model.get('videos').each(function (m) {
      this.renderVideo(m);
    }, this);
  }
});