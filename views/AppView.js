var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .btn': 'handleSearchQuery',
    'click .view-video': 'viewVideo',

  },

  initialize: function () {
    this.listenTo(this.model, 'change:current_video', this.renderCurrentVideoView);
    this.listenTo(this.model, 'change:current_search', this.getSearchResults);
    this.listenTo(this.model.get('videos'), 'reset', this.renderAllVideos);
  },

  viewVideo: function (e) {
    // A Jquery method that gives you the data attribute in HTML.
    var clickedVideoId = $(e.currentTarget).data().id;

    this.model.updateCurrentVideo(clickedVideoId);
  },

  handleSearchQuery: function () {
    var input = $('.search-input').val();
    this.model.updateCurrentSearch(input);
  },

  renderVideoList: function (video) {
  
    var videoListView = new VideoView({ model: video });
    this.$('.videos-list').append(videoListView.render().el);
  },

  renderAllVideos: function (video) {
    this.$('.videos-list').html('');

    this.model.get('videos').each(function (v) {
      this.renderVideoList(v);
    }, this);

    var id = this.model.get('videos').models[0].id
    this.model.updateCurrentVideo(id);
    
  },

  getSearchResults: function () {
    var searchQuery = this.model.get('current_search');
    this.model.get('videos').getResults(searchQuery);
  },

  renderCurrentVideoView: function () {
    if (this.currentVideoView) {
      this.currentVideoView.remove();
    }

    this.currentVideoView = new CurrentVideoView({ model: this.model.get('current_video')});

    this.$('.current-video-container').append(this.currentVideoView.render().el);

  }


})
