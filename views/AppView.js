var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .video-search': 'createVideo'
  },

  initialize: function () {
    this.$videoName = this.$()
    this.$videoList = this.$('video-list');
    this.listenTo(this.model.get('videos'), 'add', this.renderVideo);
    this.renderVideos();
  },

  createVideo: function () {
    this.model.get('videos').addVideo(
      this.$('#video-search-input').val()
    );
  },

  // renderPage: function () {
  //
  // },

  renderVideo: function (video) {
    var videoView = new VideoView({ model: video });
    this.$('.video-list').append(videoView.render().el);
  },

  renderVideos: function () {
    this.model.get('videos').each(function (m) {
      this.renderVideo(m);
    }, this);
  }
});
