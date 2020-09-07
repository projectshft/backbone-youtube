var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'keyup .video-search-field': 'fetchOnEnter',
    'click img': 'viewVideo',
  },

  initialize: function () {
    this.$videoList = this.$('.video-list');
    this.$mainVideo = this.$('.main-video-container');

    this.listenTo(this.model, 'change:current_video', this.renderMainView);
    this.listenTo(this.model.get('videos'), 'add', this.renderVideo);
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);

    this.renderVideos();
    this.renderMainView();

  },

  renderMainView: function () {
    if (this.videoMainView) {
      this.videoMainView.remove();
    }

    this.videoMainView = new VideoMainView({ model: this.model.get('current_video')});
    this.$mainVideo.append(this.videoMainView.render().el);
  },

  //first part of rendering the thumbnail list
  renderVideos: function () {
    this.model.get('videos').each(function (m) {
      this.renderVideo(m);
    }, this);
  },

  //second part of rendering the thumbnail list
  renderVideo: function (video) {
    var videoView = new VideoView({ model: video });
    this.$videoList.append(videoView.render().el);
  },

  viewVideo: function (e) {
    console.log('clicked')
    var clickedVideoThumbnail = $(e.currentTarget)[0].currentSrc;
    this.model.showVideo(clickedVideoThumbnail);
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
