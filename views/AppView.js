var AppView = Backbone.View.extend({

  el: $('body'),

  events: {
    'click .search': 'submitSearch',
    'click .view-video': 'setMainVideo'
  },

  initialize: function() {
    this.$input = this.$('#query-input'); //leaving alone for right now

    this.listenTo(this.model.get('videos'), 'reset', this.renderView);
    this.listenTo(this.model, 'change:current_video_index', this.renderView);

  },

  // Controller functions
  submitSearch: function() {
    alert(this.$input.val()); // use this.$input.val()
    this.$input.val(''); // clearing after the fetch()
  },

  setMainVideo: function(e) {
    var clickedVideoId = $(e.currentTarget).data().id;

    this.model.setCurrentVideo(clickedVideoId);
  },

  // View functions
  renderSideVideo: function(video) {
    var videoSideView = new VideoSideView({ model: video} );
    this.$('.video-list').append(videoSideView.render().el);
  },

  renderPlayer: function(video) {
    this.$('.player').empty();
    var videoSideView = new VideoMainView({ model: video});
    this.$('.player').append(videoSideView.render().el);
  },

  // Every time the user clicks, re-render the entire thing.
  // Inefficient but easy
  renderView: function() {
    var indexOfVideo = 0;
    this.model.get('videos').each(function(m) {

      if (indexOfVideo === this.model.get('current_video_index')) {
        this.renderPlayer(this.model.get('videos').at(indexOfVideo));
      } else {
        this.renderSideVideo(m);
    }
      indexOfVideo++;
    }, this);
  },


});
