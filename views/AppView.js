var AppView = Backbone.View.extend({

  el: $('body'),

  events: {
    'click .search': 'searchVideo',
    'click .video-title-sidebar': 'viewVideo',
    'click .video-sidebar-img': 'viewVideo',
  },

  initialize: function () {
    this.$videoList = this.$('.video-sidebar-container');
    this.$mainVideoList = this.$('.main-video-container');

    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
    this.listenTo(this.model, 'change:current_video', this.renderClickedVideo);
  },

  searchVideo: function () {
    if(this.$('#video-name-input').val() == '') {
      alert('Error. Search input cannot be empty.')
    } else {
    this.model.get('videos').updateUrl(this.$('#video-name-input').val())
    this.$('.main-video').empty();
    this.$('.video').empty();
  }
},
  viewVideo: function (e) {
    var clickedVideoId = $(e.currentTarget).data().id;
    this.model.showVideo(clickedVideoId);
  },

  renderVideo: function (video) {
    var smallVideoView = new SmallVideoView({ model: video });
    this.$videoList.append(smallVideoView.render().el);
  },

  renderMainVideo: function (video) {
    var mainVideoView = new MainVideoView({ model: video });
    this.$mainVideoList.append(mainVideoView.render().el);
  },

  renderClickedVideo: function () {
    this.$('.main-video').empty();
    this.renderMainVideo(this.model.get('current_video'))
  },

  renderVideos: function () {
    this.model.get('videos').each(function (m) {
      this.renderVideo(m);
    }, this);
    this.renderMainVideo(this.model.get('videos').at(0))
  }
});
