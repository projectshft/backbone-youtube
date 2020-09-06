var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'keyup .video-search-field': 'fetchOnEnter',
    // 'click img': 'changeVideo',
  },

  initialize: function () {
    this.$videoList = this.$('.video-list');

    this.renderVideos();
    this.listenTo(this.model.get('videos'), 'add', this.renderVideo);
  },

  renderVideo: function (video) {
    var videoView = new VideoView({ model: video });
    this.$videoList.append(videoView.render().el);
  },

  renderVideos: function () {
    this.model.get('videos').each(function (m) {
      this.renderVideo(m);
    }, this);
  },

  fetchOnEnter: function (event) {
    console.log('in fetchOnEnter!');
    //If 'enter' key pressed in search box, goto searchVideo function in VideosCollection
    if (event.which === 13) {
      appModel.get('videosCollection').createUrl(this.$input.val());
      this.$input.val('');
    }
  },
});
