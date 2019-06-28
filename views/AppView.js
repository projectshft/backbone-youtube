var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #search-button': 'updateQuery',
  },

  initialize: function () {
    this.$searchInput = this.$('.search-input');
    this.$currentVideo = this.$('.current-video');
    this.$videoQueue = this.$('.video-queue');

    this.model.setUrl(this.model.get('currentQuery'));
    this.listenTo(this.model.get('videos'), 'reset', this.setInitialCurrentVideo);
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideoQueue);
    this.listenTo(this.model, 'change:currentVideo', this.renderCurrentVideo);
    this.listenTo(this.model, 'change:currentQuery', this.updateSearch);
  },

  setInitialCurrentVideo(){
    this.model.set('currentVideo',this.model.get('videos').models[0]);
    this.model.get('currentVideo').set('currentVideo', true);
    this.renderCurrentVideo();
  },

  setCurrentVideo: function(video){
    if(this.model.currentVideo){
      this.$currentVideo.empty();
      this.model.set('currentVideo', video);
    }

    this.renderCurrentVideo();
  },

  updateQuery(){
    var newQueryString = this.$searchInput.val();
    console.log(newQueryString);
    this.model.set('currentQuery',newQueryString);
  },

  updateSearch(){
    this.model.setUrl(this.model.get('currentQuery'));
    this.model.get('videos').fetch({
      reset: true
    });
  },

  renderCurrentVideo: function () {
    this.$('.current-video').empty();
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
    this.$('.video-queue').empty();
    this.model.get('videos').each(function (m) {
    if (!m.get('currentVideo')) {
      this.renderVideoCard(m);
    }
  }, this);
  }
  
});