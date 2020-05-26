var AppView = Backbone.View.extend({

  el: $('body'),

  events: {
    'click .search': 'submitSearch',
    'click .side-view': 'setMainVideo'
  },

  initialize: function() {
    this.$input = this.$('#query-input');
    
    this.listenTo(this.model.get('videos'), 'reset', this.renderViews);
    this.listenTo(this.model, 'change:current_video_index', this.renderViews);

  },

  // Controller functions
  submitSearch: function() {
    var input = this.$input.val();
    this.model.resetQueryOnCollection(input);
    this.$input.val('');
  },

  setMainVideo: function(e) {
    var clickedVideoId = $(e.currentTarget).data().id;
    this.model.setCurrentVideoIndex(clickedVideoId);
  },

  // View functions
  renderSideVideo: function(video) {

    var videoSideView = new VideoSideView({ model: video} );
    this.$('.video-list').append(videoSideView.render().el);
  },

  renderPlayer: function(video) {

    var videoSideView = new VideoMainView({ model: video});
    this.$('.display-pane').append(videoSideView.render().el);
  },

  // Every time the user clicks, empty and re-render.
  renderViews: function() {
    this.$('.display-pane').empty();
    this.$('.video-list').empty();

    // For each model in the collection, check its index against
    // the index of the current video. If a model matches, render that
    // as the main player.
    var indexOfVideo = 0;
    this.model.get('videos').each(function(m) {
      if (indexOfVideo === this.model.get('current_video_index')) {
        this.renderPlayer(this.model.get('videos').at(indexOfVideo));
      } else {
        this.renderSideVideo(m);
      }
      indexOfVideo++;
    }, this);
  }


});
