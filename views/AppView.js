var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .submit-search': 'handleSubmit',
    'click .video': 'handleVideoClick',
    'keyup': 'handleKeyup' 
  },

  initialize: function () {
    this.listenTo(this.model.get('videos'), 'add', this.renderVideos, this.setCurrentVideo);
    this.listenTo(this.model, 'change:current_video', this.renderDetailView);
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos, this.setCurrentVideo);
    this.listenTo(this.model.get('videos'), 'add', this.handleCurrent);
    
    this.renderVideos();
  },

  renderVideo: function (video) {
    var videoView = new VideoView({ model: video });
    this.$('.videos-col').append(videoView.render().el);
  },

  renderVideos: function () {
    this.$('.videos-col').empty();
    this.model.get('videos').each(function (m) {
      this.renderVideo(m);
    }, this);
    this.setCurrentVideo();
  },

  renderDetailView: function () {
    if (this.detailView) {
      this.detailView.remove();
    }

    this.detailView = new DetailView({ model: appModel.get('current_video')});

    this.$('.detail-col').append(this.detailView.render().el);

    this.detailView.renderDetailVideo();
  },

  handleVideoClick: function (e) {
    var clickedVideoId = $(e.target).data().id;

    this.model.updateCurrentVideo(clickedVideoId);
  },

  handleSubmit: function () {
    var query = $('#search-input').val();
    this.model.get('videos').updateUrl(query);
    $('#search-input').val('');
  },

  handleKeyup: function (e) {
    if (e.keyCode === 13) {
      var query = $('#search-input').val();
      this.model.get('videos').updateUrl(query);
      $('#search-input').val('');
    }
  },

  setCurrentVideo: function () {
    var current = this.model.get('videos').first();
    this.model.set('current_video', current);
  }
})