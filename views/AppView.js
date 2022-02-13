/* eslint-disable prefer-destructuring */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #search-btn': 'submitSearch',
    'click .thumbnail-video': 'changeCurrent',
  },

  endPoint: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&videoEmbeddable=true&key=AIzaSyDG2W0sGtlj37V3J0cZUjSgkOjNGFCdrEw&q=`,

  initialize() {
    // this.model.get('videos').fetch({
    //   reset: true,
    //   url: `${this.endPoint}flight of the conchords dallas`,
    // });

    this.model.get('videos').fetch({
      reset: true,
      url: 'file:///Users/nathandrake/Dropbox/Coding%20Projects/parsity/backbone-youtube/sampleData.js',
    });

    this.listenTo(this.model.get('videos'), 'reset', this.renderAllVideos);
  },

  submitSearch() {
    this.model.get('videos').fetch({
      reset: true,
      url: this.endPoint + this.$('#search-input').val(),
    });
  },

  renderCurrentVideo(video) {
    this.$('#main-video-div').empty();
    const currentVideoView = new CurrentVideoView({ model: video });
    this.$('#main-video-div').append(currentVideoView.render().el);
  },

  renderVideoThumbnail(video) {
    const videoThumbnailView = new VideoThumbnailView({ model: video });
    this.$('#video-thumbnail-div').append(videoThumbnailView.render().el);
  },

  renderAllVideos() {
    this.$('#video-thumbnail-div').empty();

    this.renderCurrentVideo(this.model.get('currentVideo'));
    this.model.get('videos').each(function (videoModel) {
      this.renderVideoThumbnail(videoModel);
    }, this);
  },
});
