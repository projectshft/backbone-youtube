var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #search-button': 'updateQuery',
    'click .card': 'setCurrentVideo'
  },

  initialize: function () {
    this.$searchInput = this.$('.search-input');
    this.$currentVideo = this.$('.current-video');
    this.$videoQueue = this.$('.video-queue');

    this.model.setUrl(this.model.get('currentQuery'));
    this.listenTo(this.model.get('videos'), 'reset', this.setInitialCurrentVideo);
    this.listenTo(this.model.get('videos'), 'reset', this.render);
    this.listenTo(this.model, 'change:currentVideo', this.render);
    this.listenTo(this.model, 'change:currentQuery', this.updateSearch);
  },

  setInitialCurrentVideo(){
    this.model.set('currentVideo',this.model.get('videos').models[0]);
    this.model.get('currentVideo').set('currentVideo', true);
    this.renderCurrentVideo();
  },

  setCurrentVideo: function(e){
    var newCurrentVideoId = $(e.currentTarget).data().id;
    this.model.get('currentVideo').set('currentVideo', false);
    var allVideos = this.model.get('videos');

    var currentVideo = allVideos.findWhere({
      id: newCurrentVideoId
    });
    console.log(currentVideo);
    currentVideo.set('currentVideo', true);
    this.model.set('currentVideo', currentVideo);
  
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
  },

  render: function(){
    this.renderCurrentVideo();
    this.renderVideoQueue();
  }
  
});