var AppView = Backbone.View.extend({
  el: $('body'),

  events: { // search button clicks and video button clicks
    'click .select': 'selectCurrentVideo',
    'click .search': 'searchAndReset',
    'keypress #search-bar-input': 'searchWithEnter',
    'scroll': 'detectScroll'
  },
  //things to initialize:collection listeners,search input
  initialize: function() {
    this.listenTo(this.model, 'change:current_video_model', this.renderCurrentVideo);
    this.listenTo(this.model.get('videos'), 'add', this.renderRelatedVideos);
    $searchInput = this.$('#search-bar-input');
    //
    //The following were being used to construct the unlimited scroll

    //     _.bindAll(this, 'detectScroll');
    // // bind to window
    // $('.related-container').scroll(this.detectScroll);
  },

  //need to select the ONE video from the collection that will be currently playing
  selectCurrentVideo: function(video) {
    //use the embedded data attribute to get the ID for the video
    var videoIdNum = $(video.currentTarget).data().id
    this.model.setCurrentVideo(videoIdNum);
  },
  //append the html made by the current video view
  renderCurrentVideo: function() {
    var currentVideo = new CurrentVideoView({
      model: this.model.get('current_video_model')
    });
    this.$('.current-video-player').empty().append(currentVideo.renderCurrentHTML().$el);

  },

  //render the whole list and reference the singular render function
  renderRelatedVideos: function() {
    this.$('.related-videos').empty()
    var collection = this.model.get('videos');
    collection.each(function(video) {
      this.renderRelatedVideo(video);
    }, this)
  },


  renderRelatedVideo: function(videoModel) {
    // render each item individually
    //used by the each function here to render the videos in collection
    var videoView = new RelatedVideoView({
      model: videoModel
    });
    var relatedVideos = this.$('.related-videos')
    relatedVideos.append(videoView.renderRelatedHTML().el)
  },


  //take in search input and pass to collection to update collection model
  searchAndReset: function() {
    if ($searchInput.val()) {
      var searchTerm = $searchInput.val()
      this.model.get('videos').updateUrl(searchTerm)
    } else {
      alert("Please enter a valid search term")
    }
  },


  searchWithEnter: function(keyPress) {
    if (keyPress.keyCode === 13) {
      this.searchAndReset();
      $searchInput.val("")
    }
  }

  // Beginning to construct unlimited scroll, ran out of time
  // detectScroll:function(e){
  //   console.log(e.currentTarget)
  // }
})
