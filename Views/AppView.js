var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'keyup .video-search-field': 'fetchOnEnter',
  },

  initialize: function () {
    this.$input = this.$('#search-input');
    this.renderMainVideo();
    this.renderThumbnailVideos();
    // this.listenTo(this.model, 'change:current_video', this.renderMainVideo);
  },

  renderMainVideo: function (video) {
    if (this.videoMainView) {
      this.videoMainView.remove();
    }

    this.videoMainView = new VideoMainView({
      model: this.model.get('current_video'),
    });
    var currentVideo = this.model.get('current_video');

    this.$('.main-video-container').append(this.videoMainView.render().el);
    appModel.get('videosCollection').findThumbnails(currentVideo);
  },

  renderThumbnailVideos: function () {
    console.log('rendering thumbnails! for this.model:');
    console.log(this.model);
    // if (this.videoThumbnailView) {
    //   this.videoThumbnailView.remove();
    // }

    // this.videoThumbnailView = new videoThumbnailView({ model: videos });
    // this.$('.thumbnail-video-container').append(this.videoThumbnailView.render().el);
  },

  fetchOnEnter: function (event) {
    console.log('in fetchOnEnter!');
    //If 'enter' key pressed in search box, goto searchVideo function in VideosCollection
    if (event.which === 13) {
      // console.log('confirmed enter key');
      // console.log(this.$input.val());
      // console.log(appModel.get('videosCollection'));
      appModel.get('videosCollection').createUrl(this.$input.val());
    }
  },

  viewVideo: function (e) {
    var clickedVideoId = $(e.currentTarget).data().id;

    this.model.showNewVideo(clickedVideoId);
  },
});
