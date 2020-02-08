var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .submit-video': 'searchForVideo',
    'click .sidebar-video-click': 'createVideo'
  },

  initialize: function() {

    this.largeView = null

    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
    this.listenTo(this.model, 'change:current_video', this.renderLargeVideoView);
  },

  renderPage: function() {

  },

  searchForVideo: function() {
    console.log('this is the searched value', this.$('#search-input').val())
    this.model.get('videos').updateVideoUrl(this.$('#search-input').val())
  },

  changeLargeVideo: function(e) {
    var clickedVideoId = $(e.currentTarget).data().id;
    this.model.showReviews(clickedVideoId);
    console.log('this is the clickedVideoId')
  },



  renderLargeVideoView: function() {
    //  if (this.detailView) {
    //    this.detailView.remove();
    //}
    this.largeView = new LargeVideoView({
      model: this.model.get('current_video')
    });


    this.$('.videos-container').append(this.largeView.render().el);
  },

  renderVideo: function(video) {
    var videoView = new VideoView({
      model: video
    });
    this.$('.video-list').append(videoView.render(video).el);
  },

  renderVideos: function() {
    this.model.get('videos').each(function(m) {

      this.renderVideo(m);
    }, this);
  }
});
