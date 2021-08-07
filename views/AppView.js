var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search': 'searchVideos',
    'click .video-link': 'setVideo'
  },

  videoView: null,

  initialize: function () {
    this.listenTo(this.model, 'change:currentVideo', this.renderCurrentVideo);
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideoList);
  },

  searchVideos: function () {
    var query = this.$('#search-query').val();
    this.model.get('videos').setUrl(query);

    var self = this;

    this.model.get('videos').fetch({reset: true}).done(function() {
      
      var firstVidId = self.model.get('videos').first().get('id');
      self.model.setCurrentVideo(firstVidId);
    });
  },

  setVideo: function (e) {
    this.model.setCurrentVideo($(e.currentTarget).data().id);
  },

  renderCurrentVideo: function () {
    if (this.videoView)
      this.videoView.remove();
    
    this.videoView = new VideoView({ model: this.model.get('currentVideo')});

    this.$('.video').append(this.videoView.render().el);
  },

  renderVideoList: function () {
    this.$('.video-list').empty();

    if (this.model.get('currentVideo'))
      this.renderCurrentVideo();

    this.model.get('videos').each(function (vid) {
      this.listView = new VideoListView({ model: vid});

      this.$('.video-list').append(this.listView.render().el);
    }, this)
  }
})