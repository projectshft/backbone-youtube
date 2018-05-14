var AppView = Backbone.View.extend({
  el: '.container',

  events: {
    'keydown #search-videos': 'fetchVideos',
    'click .video': 'updateCurrentVideoIndex'
  },

  initialize: function() {
    this.$searchInput = this.$('#search-videos');
    this.$videoPlayer = this.$('.video-player');
    this.$videoPlaylist = this.$('.video-playlist');

    this.listenTo(this.model.get('videos'), 'update', this.renderAll);
    this.listenTo(this.model, 'change:currentVideoIndex', this.renderPlayer);
  },

  fetchVideos: function(e) {
    var query = this.$searchInput.val();

    // confirm user hit enter and input is not empty
    if (e.keyCode === 13 && query != '') {

      var self = this;

      this.model.get('videos').fetch({
        data: {
          q: query,
          part: 'snippet',
          key: config.MY_KEY
        }
      });

      // reset currentVideoIndex on new search to play first video
      this.model.set('currentVideoIndex', 0);

      this.$searchInput.val('');
    }
  },

  initialFetch: function() {
    this.model.get('videos').fetch({
      data: {
        q: 'dogs',
        part: 'snippet',
        key: config.MY_KEY
      }
    });
  },

  renderAll: function() {
    this.renderPlayer();
    this.renderPlaylist();
  },

  renderPlayer: function() {
    var video = this.model.get('videos').at(this.model.get('currentVideoIndex'));

    var videoPlayerView = new VideoPlayerView({
      model: video
    });

    this.$videoPlayer.append(videoPlayerView.render().el);

    // fixes aspect ratio of iframe
    var width = $('iframe').outerWidth();
    $('iframe').css('height', (width * .5625) + 'px');
  },

  renderPlaylist: function() {
    var videos = this.model.get('videos');
    var playlist = this.$videoPlaylist;

    playlist.empty();

    videos.forEach(function(video) {
      var view = new PlaylistVideoView({
        model: video
      });
      playlist.append(view.render().el);
    });
  },

  updateCurrentVideoIndex: function(e) {
    var newCurrentIndex = $(e.currentTarget).closest('.video').data('model-index');

    this.model.set('currentVideoIndex', newCurrentIndex);
  }
});
