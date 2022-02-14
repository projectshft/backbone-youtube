/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #search-btn': 'submitSearch',
    'click .thumbnail-video': 'currentVideo',
  },

  endPoint: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&videoEmbeddable=true&key=AIzaSyDG2W0sGtlj37V3J0cZUjSgkOjNGFCdrEw&q=`,

  initialize() {
    this.model.get('videos').fetch({
      reset: true,
      url: `${this.endPoint}bad lip reading seagulls`,
    });

    this.listenTo(this.model.get('videos'), 'reset', this.renderAllVideos);
    this.listenTo(this.model, 'change:currentVideo', this.renderCurrentVideo);
  },

  submitSearch() {
    this.model.get('videos').fetch({
      reset: true,
      url: this.endPoint + this.$('#search-input').val(),
    });
  },

  currentVideo(e) {
    const clickedVideoId = $(e.currentTarget).data().id;

    this.model.updateCurrentVideo(clickedVideoId);
  },

  renderCurrentVideo() {
    this.$('#main-video-div').empty();
    const currentVideoView = new CurrentVideoView({
      model: this.model.get('currentVideo'),
    });
    this.$('#main-video-div').append(currentVideoView.render().el);
  },

  renderVideoThumbnail(video) {
    const videoThumbnailView = new VideoThumbnailView({ model: video });
    this.$('#video-thumbnail-div').append(videoThumbnailView.render().el);
  },

  renderAllVideos() {
    this.$('#video-thumbnail-div').empty();

    this.renderCurrentVideo();
    this.model.get('videos').each(function (videoModel) {
      this.renderVideoThumbnail(videoModel);
    }, this);
  },
});
