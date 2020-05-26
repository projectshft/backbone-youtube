var AppView = Backbone.View.extend({

  el: $('body'),

  events: {
    'click .search': 'submitSearch',
    'click .side-view': 'setMainVideo'
  },

  initialize: function() {
    this.$input = this.$('#query-input');

    // The three render functions are identical, and are named differently
    // only for debugging purposes. The listeners, however, are distinct.
    // The first gets the initial rendering of the video collections,
    // the second (not working) should re-render after a new fetch,
    // the third re-renders a page based on what video in the side view
    // is selected
    this.listenTo(this.model.get('videos'), 'reset', this.renderViewsOnInitial);
    this.listenTo(this.model, 'update:videos', this.renderViewsBecauseVideosChanged);
    this.listenTo(this.model, 'change:current_video_index', this.renderViewsBecauseIndexChanged);

  },

  // Controller functions ///////////////////////////////////////////////////

  //
  submitSearch: function() {
    var input = this.$input.val();
    this.model.resetQueryOnCollection(input);
    this.$input.val('');
  },


  setMainVideo: function(e) {
    var clickedVideoId = $(e.currentTarget).data().id;
    this.model.setCurrentVideoIndex(clickedVideoId);
  },

  // View functions //////////////////////////////////////////////////////////


  // Both renderSideVideo and renderPlayer are called by the primary
  // render function. The views they create are relatively simpe... 
  renderSideVideo: function(video) {

    var videoSideView = new VideoSideView({ model: video} );
    this.$('.video-list').append(videoSideView.render().el);
  },

  renderPlayer: function(video) {

    var videoSideView = new VideoMainView({ model: video});
    this.$('.display-pane').append(videoSideView.render().el);
  },


  // After emptying its div classes, this render function renders each model
  // in videoCollection. As it does so, it sets an index-counter. It checks that
  // index against appModel's current_video_index. If a model matches, renders
  // that model in the main player.

  renderViewsOnInitial: function() {
    alert("renderViewsOnInitial was called")
    this.$('.display-pane').empty();
    this.$('.video-list').empty();


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

  // The remaining two functions are identical in their body save for an
  // alert. See note above listeners.

  renderViewsBecauseNewFetchChanged: function() {
    alert("renderViewsBecauseNewFetchChanged was called")
    this.$('.display-pane').empty();
    this.$('.video-list').empty();

    var indexOfVideo = 0;
    console.log("This is what the View thinks videoCollection is" + this.model.get('videos'));
    this.model.get('videos').each(function(m) {
      if (indexOfVideo === this.model.get('current_video_index')) {
        this.renderPlayer(this.model.get('videos').at(indexOfVideo));
      } else {
        this.renderSideVideo(m);
      }
      indexOfVideo++;
    }, this);
  },

  renderViewsBecauseIndexChanged: function() {
    alert("renderViewsBcCurrentVideoIndexChanged was called")
    this.$('.display-pane').empty();
    this.$('.video-list').empty();

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
