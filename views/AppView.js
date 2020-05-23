var AppView = Backbone.View.extend({
  el: $('body'),

  initialize: function() {
    // when videos get added, render them and set current video
    this.listenTo(this.model.get('videos'), 'add', this.renderVideos)
    this.listenTo(this.model.get('videos'), 'add', this.setCurrentVideo);

  },

  setCurrentVideo: function() {
    // set current video to be the first in the collection
    this.model.set('currentlyPlaying', this.model.get('videos').models[0])
  },

  renderVideo: function(video) {
    // create new view based on video model
    var littleVideoView = new LittleVideoView({ model: video });
    this.$('#video-list').append(littleVideoView.render().el)
  },

  renderVideos: function() {
    // empty video container every time so each video only appears once
    this.$('#video-list').empty()
    // render each video individually
    this.model.get('videos').each(function (model) {
      this.renderVideo(model)
    }, this);
  }
});
