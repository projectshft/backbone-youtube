var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'keypress #search-bar': 'fetchVideos',
    'click #video-list-img': 'changeCurrentVideo'
  },

  initialize: function () {
    this.$input = this.$('#search-bar');
    this.$currentVideo = this.$('.current-video__container');
    this.$videoList = this.$('.video-list__container');

    this.listenTo(this.model.get('videos'), 'reset', this.renderFirstVideo);
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
  },

  fetchVideos: function (e) {
    if (e.which === 13 && this.$input.val()) {
      // Update VideosCollection url and re-retch data
      console.log(this.$input.val());
      this.model.get('videos').fetchVideos(this.$input.val());
      this.renderVideos();
    }
  },

  changeCurrentVideo: function () {

  },

  renderFirstVideo: function () {
    this.$currentVideo.empty();
    var firstModel = this.model.get('videos').first();
    var videoView = new CurrentVideoView({ model: firstModel });
    this.$currentVideo.append(videoView.render().el);
  },

  renderVideo: function (videoModel) {
    var videoListView = new VideoListView({ model: videoModel });
    this.$videoList.append(videoListView.render().el);
  },

  renderVideos: function () {
    this.$videoList.empty();
    this.model.get('videos').each(function (model) {
      this.renderVideo(model);
    }, this);
  },

});