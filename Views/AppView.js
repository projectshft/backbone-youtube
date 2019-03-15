const AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'keypress #search': 'searchVideos',
    'click .video-list-entry': 'switchCurrentVideo'
  },

  initialize: function () {
    this.listenTo(this.model.get('videos'), 'reset', function () {
      this.renderCurrentVideo();
      this.renderVideoList();
    });
  },

  searchVideos: function (e) {
    if(e.which == 13 && this.$('#search').val()) {
      this.model.set('query', this.$('#search').val());
      this.model.get('videos').fetchVideos(this.model.get('query'));
      this.$('#search').val('');
    }
  },

  renderCurrentVideo() {
    const currentVideoView = new CurrentVideoView({
      model: this.model.get('current_video') || this.model.get('videos').models[0]
    });
    this.$('.current-video-area').html(currentVideoView.render().el);
  },

  renderVideoList: function() {
      this.$('.video-list').empty();
      for(let i = 1; i < this.model.get('videos').models.length; i++) {
        let video = this.model.get('videos').models[i];
        let videoListView = new VideoListView({model: video});
        this.$('.video-list').append(videoListView.render().el);
      }
    },
});