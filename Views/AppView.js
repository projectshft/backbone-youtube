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
