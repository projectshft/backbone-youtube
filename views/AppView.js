var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search': 'searchYouTube'
  },

  initialize: function() {
    //listening for additions to main video model and video list model during initial fetch
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideo);
    this.listenTo(this.model.get('videoList'), 'reset', this.renderVideoList);

    //listening for additions to main video model and video list model
    this.listenTo(this.model.get('videos'), 'add', this.renderVideo);
    this.listenTo(this.model.get('videoList'), 'add', this.renderVideoList);

    //rendering main video and video list views upon creation of models
    this.renderVideos();
    this.renderVideoLists();
  },

  searchYouTube: function () {
    //check if user submitted an empty data value and return error if so
    if (this.$('#search-query').val() === '') {
      return alert('Enter in text for a YouTube search.')
    }
    
    //adding main video from search input to videoCollection
    this.model.get('videos').addVideo(
      this.$('#search-query').val()
    );
    
    //adding list of videos from search input  to VideoListCollection
    this.model.get('videoList').addVideoList(
      this.$('#search-query').val()
    )

  },

  //render videos from currentVideoView
  renderVideo: function(video) {

    var currentVideoView = new CurrentVideoView({ model: video });
    
    this.$('.main-video').append(currentVideoView.render().el);

  },

  //looping through all videos in videoCollection
  renderVideos: function () {
    this.model.get('videos').each(function (m) {
      this.renderVideo(m);
    }, this);
  },

  
  renderVideoList: function(videoList) {
    
    var currentVideoListView = new VideoListView({model: videoList});
    this.$('.video-list').append(currentVideoListView.render().el);
    
  },

  //rendering all video models in VideoListCollection
  renderVideoLists: function() {
    
    this.model.get('videoList').each(function (m) {
      this.renderVideoList(m);
    }, this);

  },

});


