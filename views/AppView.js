var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search': 'handleSearch',
    'click .view-video': 'viewVideo'
  },

  mainVideo: null,

  initialize: function () {
    this.listenTo(this.model.get('videos'), 'add', this.renderVideo);
    this.listenTo(this.model.get('videos'), 'add', this.setCurrentVideo);
    this.listenTo(this.model, 'change:show_video', this.renderPage);
    this.listenTo(this.model, 'change:current_video', this.renderMainVideo);
    this.$searchInput = this.$('#search-query');
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
    this.listenTo(this.model, 'change:searchQuery', this.updateSearchUrl);
    this.renderVideos();
  },

  setCurrentVideo: function () {
    var currentVideo = appModel.attributes.videos.at(0);
    this.model.set('current_video', currentVideo);
  },

  updateSearchUrl: function () {
    appModel.get('videos').fetch({ reset: true });
  },

  handleSearch: function () {
    var search = this.$searchInput.val();
    this.model.set('searchQuery', search);
  },

  viewVideo: function (e) {
    var clickedVideoId = $(e.currentTarget).data().id;
    this.model.showVideo();
    this.model.updateCurrentVideo(clickedVideoId);
  },

  renderMainVideo: function () {
    if (this.mainVideo) {
      this.mainVideo.remove();
    }

    this.mainVideo = new MainVideoView({ model: this.model.get('current_video') });

    this.$('.main-videos').append(this.mainVideo.render().el);
  },

  renderVideo: function (video) {
    var view = new VideoView({ model: video })
    this.$('.video-list').append(view.render().el);
  },

  renderVideos: function () {
    $('.video').remove();

    this.model.get('videos').each(function (m) {
      this.renderVideo(m);
    }, this);
  }
});