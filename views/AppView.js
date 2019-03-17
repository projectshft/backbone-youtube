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
      this.model.get('videos').fetchVideos(this.$input.val());
      this.renderVideos();
    }
  },

  changeCurrentVideo: function (e) {
    // find video id and use it to find the model,
    // then update the current video view
    var videoId = $(e.target).data().id;
    var modelFound = this.model.findModelById(videoId);
    this.renderFirstVideo(false, modelFound);
  },

  renderFirstVideo: function (initialRender = true, videoModel) {
    this.$currentVideo.empty();
    var videoView;
    if (initialRender) {
      videoView = new CurrentVideoView({ model: this.model.getFirstModel() });
    } else {
      videoView = new CurrentVideoView({ model: videoModel });
    }
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