var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #search-button': 'searchVideos',
  },

  initialize: function () {
    this.$searchInput = this.$('#search-input');

    this.$currentVideo = this.$('.current-video');
    this.$videoQueue = this.$('.video-queue');

    // this.listenTo(this.model, 'change:current_video', this.renderDetailView);
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideoQueue);

    // this.renderVideo();
  },

  setCurrentVideo: function(){
    if(this.model.currentVideo){
      
    }
  },

  renderCurrentVideo: function (video) {
    var currentVideoView = new CurrentVideoView({
      model: video
    });

    $currentVideo.append(currentVideoView.render().el);
  },

  renderVideoCard: function(video){
    var videoCardView = new VideoCardView({
      model: video
    });
    this.$('.video-queue').append(videoCardView.render().el);
  },

  renderVideoQueue: function () {
    this.model.get('videos').each(function (m) {
      this.renderVideoCard(m);
    }, this);
  }
  
});