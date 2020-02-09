var AppView = Backbone.View.extend({
// Set DOM element for Body
  el: $('body'),

  // Listen for user events
  events: {
    // On Mouse click of search, look for new search string.  And eliminating the awesome initial Auburn basketball query
    'click #search-button': 'updateQuery',
    // On Mouse Click trigger update to 5 videos
    'click .card': 'updateCurrentVideo'
  },

  //When page loaded, do the following things

  initialize: function () {
    this.$searchInput = this.$('.search-input');
    this.$currentVideo = this.$('.current-video');
    this.$videoQueue = this.$('.video-queue');

    this.model.setUrl(this.model.get('currentQuery'));
    this.listenTo(this.model.get('videos'), 'reset', function(){
      this.updateInitialCurrentVideo();
      this.render();
    });
    this.listenTo(this.model, 'change:currentVideo', this.render);
    this.listenTo(this.model, 'change:currentQuery', this.updateSearch);
  },

  updateInitialCurrentVideo: function(){
    this.model.setCurrentVideo('0');
  },

  updateCurrentVideo: function(e){
    //check for current video assignment
    this.model.setCurrentVideo($(e.currentTarget).data().id);

  },

  // Check for edge case of null search string

  updateQuery: function(){
    var newQueryString = this.$searchInput.val();
    if (newQueryString !== '' && newQueryString !== this.model.get('currentQuery')){
      this.model.updateCurrentQuery(newQueryString);
    } else {
      alert('Woah there Matey, You have to type something in the search bar');
    }
    
  },

  updateSearch: function(){
    this.model.searchYoutube();
  },

  // Pull clicked video to the frame

  renderCurrentVideo: function () {
    this.$('.current-video').empty();
    var currentVideoView = new CurrentVideoView({
      model: this.model.get('currentVideo')
    });

    this.$('.current-video').append(currentVideoView.render().el);
  },

  //Render frame of 5 in Queue
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