var AppView = Backbone.View.extend({

  el: $('body'),

  events: {
    'click .search': 'searchVideo'
  },

  initialize: function () {
    this.$videoList = this.$('.video-sidebar-container');
    this.$mainVideoList = this.$('.main-video-container');

    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
  },

  searchVideo: function () {
    this.model.get('videos').updateUrl(this.$('#video-name-input').val())
  },

  renderVideo: function (video) {
    var smallVideoView = new SmallVideoView({ model: video });
    this.$videoList.append(smallVideoView.render().el);
  },

  renderMainVideo: function (video) {
    var mainVideoView = new MainVideoView({ model: video });
    this.$mainVideoList.append(mainVideoView.render().el);
  },

  renderVideos: function () {
    this.model.get('videos').each(function (m) {
      this.renderVideo(m);
    }, this);
    this.renderMainVideo(this.model.get('videos').at(0))
  }
})
