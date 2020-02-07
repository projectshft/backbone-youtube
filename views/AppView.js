var AppView = Backbone.View.extend({

  el: $('body'),

  events: {
    'click .search': 'getVideo'
  },

  initialize: function () {
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);

    this.renderVideos()
  },

  getVideo: function () {
    var query = this.$('#video-name-input').val();
    this.model.get('videos').updateURL(query)
  },

  renderVideo: function (video) {
    var smallVideoView = new SmallVideoView({ model: video });
    this.$('.video-sidebar-container').append(smallVideoView.render().el);
  },

  renderMainVideo: function (video) {
    var mainVideoView = new MainVideoView({ model: video });
    this.$('.main-video-container').append(mainVideoView.render().el);
  },

  renderVideos: function() {
    this.model.get('videos').each(function(m) {
      this.renderVideo(m);
      this.renderMainVideo(m);
    }, this);
  }
})
