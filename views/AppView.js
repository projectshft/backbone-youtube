var AppView = Backbone.View.extend({

  el: $('body'),

  events: {
    'click .search': 'submitSearch',
    'click .side-view': 'setMainVideo'
  },

  initialize: function() {
    this.$input = this.$('#query-input'); //leaving alone for right now

    this.listenTo(this.model.get('videos'), 'reset', this.renderViews);
    this.listenTo(this.model, 'change:current_video_index', this.renderViews);

  },

  // Controller functions
  submitSearch: function() {
    alert(this.$input.val()); // use this.$input.val()
    this.$input.val(''); // clearing after the fetch()
  },

  setMainVideo: function(e) {
    var clickedVideoId = $(e.currentTarget).data().id;
    this.model.setCurrentVideoIndex(clickedVideoId);
  },

  // View functions
  toggleCurrent: function() {
    var currentVideoId = this.model.get('videos').at(this.model.get('current_video_index')).id;
    var referenceToMain = "#" + currentVideoId + "-main";
    var referenceToSide = "#" + currentVideoId + "-side";
    console.log(referenceToMain);
    console.log(referenceToSide);

    this.$('#UVXZBA6tJPA-main').show(); // this.model.get('show_reviews'));
    this.$('#UVXZBA6tJPA-side').hide(); // !this.model.get('show_reviews'));
  },

  renderSideVideo: function(video) {

    var videoSideView = new VideoSideView({ model: video} );
    this.$('.video-list').append(videoSideView.render().el);
  },

  renderPlayer: function(video) {

    var videoSideView = new VideoMainView({ model: video});
    this.$('.display-pane').append(videoSideView.render().el);
  },

  // Every time the user clicks, re-render the entire thing.
  // Inefficient but easy
  renderViews: function() {
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
