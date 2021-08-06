var AppView = Backbone.View.extend({
  el: $('.container'),

  initialize: function () {
    this.listenTo(this.model.get('videos'), 'reset', this.renderPage)
  },

  events: {
    'click .search': 'search',
    'click .thumbnail': 'setMainVideo'
  },

  search: function () {
    var searchQuery = $('#search-query').val();
    this.model.get('videos').searchYoutube(searchQuery);
  },

  renderPage: function () {
    var videos = this.model.get('videos')
    this.model.set('mainVideo', videos.models[0]);
    var mainVideo = new MainVideoView({model: this.model.get('mainVideo')});

    this.$('.video').empty().append(mainVideo.render().el);

    videos.each(function (video) {
      var thumbnailVideos = new ThumbnailViews({model:video});
      this.$('.video-list').append(thumbnailVideos.render().el);
    })    
  },

  setMainVideo: function () {
    
  }
});