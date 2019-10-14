var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search-button': 'runSearch',
  },

  initialize: function() {
    this.listenTo(appModel.get('videos'), 'reset', this.renderVideos);
    this.renderVideo();
  },

  runSearch: function(event) {
    event.preventDefault();
    console.log('search run')
  },

  // renderVideos: function () {
  //   //this.model.get('videos').each(function (m) {
  //     this.renderVideo(m);
  //   }, this);
  // },

  renderVideo: function(video) {
    var videoView = new MainVidView({
      model: video
    });
    this.$('.video-queue').append(otherVidView.render().el);
  },
});
