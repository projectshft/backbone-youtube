var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .video-search-button': 'findVideo'
  },

  initialize: function () {
    this.$videoSearchInput = this.$('#videoSearchInput');

    this.$videoMainWindow = this.$('#videoMainWindow')
  },

  renderVideo: function (video) {
    var videoView = new MainVideoView({ model: video});
    this.$videoMainWindow.append(videoView.render().el);
  },

  renderVideos: function () {
    this.model.get('videos').each(function (m) {
      this.renderVideo(m);
    }, this);
  },




});
