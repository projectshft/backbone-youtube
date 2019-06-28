var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #search-button': 'searchVideos',
  },

  initialize: function () {
    this.$searchInput = this.$('#search-input');

    this.$currentVideo = this.$('.current-video');
    this.$videoQueue = this.$('.video-queue');

    this.listenTo(this.model, 'change:current_video', this.renderDetailView);
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);

    this.renderVideo();
  },

  renderVideo: function (video) {
    var currentVideoView = new CurrentVideoView({
      model: video
    });
    
    $currentVideo.append(currentVideoView.render().el);
  },
  
});