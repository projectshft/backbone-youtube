var AppView = Backbone.View.extend({
  el: $('.container'),
  
  events: {
    'click .search' : 'handleSearchClick',
    'click .thumbnail' : 'selectVideo',
    'keydown .search-input' : 'handleKeydown',
  },

  initialize: function () {
    this.model.get('videos').updateUrl('lord of the rings');
    this.listenTo(this.model.get('videos'), 'add', this.renderVideos);
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
    this.listenTo(this.model, 'change:selected_video', this.renderSelectedVideo);
  },

  handleKeydown: function (e) {
    if (e.which === 13) {
      e.preventDefault();
      this.handleSearchClick();
    }
  },

  handleSearchClick: function () {
    var searchQuery = this.$('#search-query').val();

    this.$('.v-selected-container').empty();
    this.$('.v-list-container').empty();
    this.model.get('videos').reset();

    this.model.updateQuery(searchQuery);
    this.$('#search-query').val('');
  },


  selectVideo: function (e) {
    var selectedVideoId = $(e.currentTarget).data().video_id;

    this.model.updateSelectedVideo(selectedVideoId);
  },

  createSelectedVideo: function (video) {
    var videoSelectedView = new VideoSelectedView({ model: video });
    this.$('.v-selected-container').empty();
    this.$('.v-selected-container').append(videoSelectedView.render().el);
  },

  renderSelectedVideo: function () {
    this.createSelectedVideo(this.model.get('selected_video'));
  },

  renderVideo: function (video) {
    var videosView = new VideosView({ model: video });
    this.$('.v-list-container').append(videosView.render().el);
  },

  renderVideos: function () {
    this.model.get('videos').each(function (video) {
      this.model.setDefaultSelectedVideo();
      this.renderVideo(video);
    }, this);
  }
});