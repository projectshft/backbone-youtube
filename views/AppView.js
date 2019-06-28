var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #search-button': 'searchVideos',
  },

  initialize: function () {
    this.$searchInput = this.$('#search-input');

    this.$currentVideo = this.$('.current-video');
    this.$videoQueue = this.$('.video-queue');

    this.model.setUrl();
    this.listenTo(this.model.get('videos'), 'reset', this.setInitialCurrentVideo);
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideoQueue);
    this.listenTo(this.model, 'change:current_video', this.renderCurrentVideo);
    // this.renderCurrentVideo();
  },

  setInitialCurrentVideo(){
    this.model.set('currentVideo',this.model.get('videos').models[0]);
    console.log(this.model.get('currentVideo'));
    this.model.get('currentVideo').set('currentVideo', true);
    this.renderCurrentVideo();
  },

  setCurrentVideo: function(video){
    if(this.model.currentVideo){
      this.model.set('currentVideo', video);
    }

    this.renderCurrentVideo();
  },

  renderCurrentVideo: function () {
    var currentVideoView = new CurrentVideoView({
      model: this.model.get('currentVideo')
    });

    this.$('.current-video').append(currentVideoView.render().el);
  },

  renderVideoCard: function(video){
    var videoCardView = new VideoCardView({
      model: video
    });
    this.$('.video-queue').append(videoCardView.render().el);
  },

  renderVideoQueue: function () {
    this.model.get('videos').each(function (m) {
    if (!m.get('currentVideo')) {
      this.renderVideoCard(m);
    }
  }, this);
  }
  
});