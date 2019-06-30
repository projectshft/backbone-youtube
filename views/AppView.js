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
    this.listenTo(this.model.get('videos'), 'reset', this.setCurrentVideo);
    this.listenTo(this.model.get('videos'), 'reset', this.render);
    this.listenTo(this.model, 'change:currentVideo', this.render);
    this.listenTo(this.model, 'change:currentQuery', this.updateSearch);
  },

  setCurrentVideo: function(e){
    //check for current video assignment
    var currentVideo;
    var allVideos = this.model.get('videos');
    if(this.model.get('currentVideo')){
      this.model.get('currentVideo').set('currentVideo', false);
      var currentVideoId = $(e.currentTarget).data().id;
      currentVideo = allVideos.findWhere({
        id: currentVideoId
      });
      
    } else {
      currentVideo = allVideos.at(0);
    }
    
    currentVideo.set('currentVideo', true);
    this.model.set('currentVideo', currentVideo);
  
  },

  updateQuery(){
    var newQueryString = this.$searchInput.val();
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