var AppView = Backbone.View.extend({
  el: $('body'),

  initialize: function() {
    this.listenTo(this.model.get('videos'), 'add', this.renderVideos)
    // this.listenTo(this.model.get('videos'), 'add', this.renderVideos);

  },

  renderVideo: function(video) {
    var littleVideoView = new LittleVideoView({ model: video });
    this.$('#video-list').append(littleVideoView.render().el)
  },

  renderVideos: function() {
    this.$('#video-list').empty()
    this.model.get('videos').each(function (model) {
      this.renderVideo(model)
    }, this);
  }
});

// rendering videos
