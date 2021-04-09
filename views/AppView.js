var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search': 'handleSearch',
    'click .view-video': 'viewVideo'
  },

  mainVideo: null,

  initialize: function () {
    this.listenTo(this.model.get('videos'), 'add', this.renderVideo);
    this.listenTo(this.model, 'change:show_video', this.renderPage);
    this.listenTo(this.model, 'change:current_video', this.renderMainVideo);
    this.$searchInput = this.$('#search-query');
    this.renderVideos();
  },

  viewVideo: function (e) {
    var clickedVideoId = $(e.currentTarget).data().id;

    this.model.showVideo();
    this.model.updateCurrentVideo(clickedVideoId);
  },

  handleSearch: function () {
    var search = this.$searchInput.val();
    this.model.get('faces').add({
      keyword: search
    })
  },

  renderMainVideo: function () {
    if (this.mainVideo) {
      this.mainVideo.remove();
    }

    this.mainVideo = new MainVideoView({ model: this.model.get('current_video') });

    this.$('.main-videos').append(this.mainVideo.render().el);
  },

  renderPage: function () {
    this.$('.main-videos').toggleClass('show', this.model.get('show_video'));

  },

  renderVideo: function (video) {
    var videoView = new VideoView({ model: video })
    this.$('.video-list').append(videoView.render().el);
  },

  renderVideos: function () {
    this.model.get('videos').each(function (m) {
      this.renderVideo(m);
    }, this);
  }

})