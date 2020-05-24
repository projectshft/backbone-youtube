var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search': 'searchYouTube'
  },

  initialize: function() {
    this.listenTo(this.model.get('videos'), 'add', this.renderVideo);
    this.listenTo(this.model.get('videoList'), 'add', this.renderVideoList)

    this.renderVideos()
    this.renderVideoLists()
  },

  searchYouTube: function () {
    //check if user submitted an empty data value and return error if so
    if (this.$('#search-query').val() === '') {
      return alert('Enter in text for a YouTube search.')
    }
    
    this.model.get('videos').addVideo(
      this.$('#search-query').val()
    );

    this.model.get('videoList').addVideoList(
      this.$('#search-query').val()
    )

  },

  //render videos from currentVideoView
  renderVideo: function(video) {

    var currentVideoView = new CurrentVideoView({ model: video });
    
    this.$('.main-video').append(currentVideoView.render().el);
  },

  renderVideos: function () {
    this.model.get('videos').each(function (m) {
      this.renderVideo(m);
    }, this);
  },

  renderVideoList: function(videoList) {
    
    var currentVideoListView = new VideoListView({model: videoList});
    this.$('.video-list').append(currentVideoListView.render().el);
    
  },

  renderVideoLists: function() {
    
    this.model.get('video-list').each(function (m) {
      this.renderVideoList(m);
    }, this);
  },

});


