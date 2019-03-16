var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'keypress #search-bar': 'fetchVideos'
  },

  initialize: function () {
    this.$input = this.$('#search-bar');
    this.$currentVideo = this.$('.current-video__container');
    this.listenTo(this.model.get('videos'), 'reset', this.renderFirstVideo);
  },

  fetchVideos: function (e) {
    if (e.which === 13 && this.$input.val()) {
      // Update VideosCollection url and re-retch data
      console.log(this.$input.val());
      this.model.get('videos').fetchVideos(this.$input.val());
    }
  },

  renderFirstVideo: function () {
    this.$currentVideo.empty();
    var firstModel = this.model.get('videos').first();
    var videoView = new CurrentVideoView({ model: firstModel });
    this.$currentVideo.append(videoView.render().el);
  },

  renderVideos: function (videoModels) {
    // console.log(this.model.get('videos'))
    console.log(videoModels)
  }

});