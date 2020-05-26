var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .video-search-button': 'findVideo'
  },

  initialize: function () {
    this.$videoSearchInput = this.$('#$videoSearchInput');
  },

  renderVideo: function (video) {
    var videoView = new MainVideoView({ model: video});
    this.$videoList.append(videoView.render().el);
  },

  renderVideos: function () {
    this.model.get('videos').each(function (m) {
      this.renderVideo(m);
    }, this);
  },




});
