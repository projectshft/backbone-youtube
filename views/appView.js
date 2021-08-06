var AppView = Backbone.View.extend({
  el: $('.container'),

  initialize: function () {
    this.model.get('videos').fetch({reset: true});
    
    this.listenTo(this.model.get('videos'), 'reset', this.renderPage)
    this.listenTo(this.model, 'change:mainVideo', this.renderMainVideo)
  },

  events: {
    'click .search': 'search',
  },

  search: function () {
    var searchQuery = $('#search-query').val();
    this.model.get('videos').searchYoutube(searchQuery);
  },

  renderPage: function () {
    var videos = this.model.get('videos')
    this.model.set('mainVideo', videos.models[0]);
    
    this.renderMainVideo();

    videos.each(function (video) {
      var thumbnailVideos = new ThumbnailViews({model:video});
      this.$('.video-list').append(thumbnailVideos.render().el);
    })    
  },

  renderMainVideo: function () {
    var targetVideo = new MainVideoView({model: this.model.get('mainVideo')});
    this.$('.video').empty().append(targetVideo.render().el);
  }
});