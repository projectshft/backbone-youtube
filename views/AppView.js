var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #search-button': 'updateQuery',
    'click .card': 'updateCurrentVideo'
  },

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

  updateQuery: function(){
    var newQueryString = this.$searchInput.val();
    if (newQueryString !== '' && newQueryString !== this.model.get('currentQuery')){
      this.model.updateCurrentQuery(newQueryString);
    } else {
      alert('It looks like there isn\'t anything in the search bar, please try a new search!');
    }
    
  },

  updateSearch: function(){
    this.model.searchYoutube();
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