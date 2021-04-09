var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search-video': 'handleSearchClick',
    'click .title-link' : 'handleLinkClick'
  },

  handleSearchClick: function() {
    var searchTermInput = this.$('.search-form').val();
    this.model.set('searchTerm', searchTermInput);
  },

  handleLinkClick: function (e) {
    var clickedVideoId = $(e.currentTarget).data().id;
    this.model.updateMainVideo(clickedVideoId)
  },

  initialize: function () {
    this.listenTo(this.model.get('videos'), 'reset', this.renderPage);
    this.listenTo(this.model, 'change:searchTerm', this.fetchOnSearch);
    this.listenTo(this.model, 'change:mainVideo', this.renderNewMainVideo);
  },

  fetchOnSearch: function () {
    this.model.get('videos').fetch({ reset: true });
  },

 renderSidebar: function (video) {
    var sidebarView = new SidebarView({ model: video });
    this.$('.sidebar-area').append(sidebarView.render().el);
  }, 

  renderNewMainVideo: function () {
    this.$('.main-video').remove();
    this.renderVideo(this.model.get('mainVideo'));
  },

  renderVideo: function (video) {
    var videoView = new VideoView({ model: video });
    this.$('.video-area').append(videoView.render().el);
  },

  renderPage: function () {
    if (this.$('.main-video')) {
      this.$('.main-video').remove();
      this.$('.video').remove();
    };
    this.model.get('videos').each(function (sideBarVideo) {
      this.renderSidebar(sideBarVideo);
    }, this);
    this.renderVideo(this.model.get('videos').first());
  }
});

