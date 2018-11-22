const AppView = Backbone.View.extend({
  el: 'body',
  events: {
    'keypress .search-videos': 'addVideos',
    'click .video-list-item': 'changeCurrentVideo'
  },
  
  initialize() {
    this.$input = $(`.search-videos`);
    this.$videoList = $(`.video-list`);

    this.listenTo(this.model.get('videos'), 'reset', () => { // Collection resets once user searches
      this.renderVideo();
      this.renderVideoList();
    });
    this.listenTo(this.model, 'change:current_video', this.renderVideo) // Curent video changes once user selects side video
  },

  // Fetches videos from ytAPI and adds them to videos collection once a user searches and hits "Enter"
  addVideos(e) {
    if(e.keyCode === 13 && this.$input.val()) {
      this.model.set('query', this.$input.val());
      this.model.get('videos').fetchVideos(this.model.get('query'));
      this.$input.val('');
    }
  },
  
  // Renders view for current video
  renderVideo() {
    const videoView = new VideoView({
      model: this.model.get('current_video') || this.model.get('videos').models[0] // current_video null by default
    });
    this.$('.main').html(videoView.render().el);
  },

  // Renders side video list views
  renderVideoList() {
    this.$videoList.empty();
    for(let i = 1; i < this.model.get('videos').models.length; i++) {
      let video = this.model.get('videos').models[i];
      let videoListView = new VideoListView({model: video});
      this.$videoList.append(videoListView.render().el);
    }
  },

  // Changes the current_video model to the associated model the user clicks on
  changeCurrentVideo(e) {
    let newVideoID = e.target.dataset.id;
    let newVideo = this.model.get('videos').findWhere({id: newVideoID});
    this.model.set('current_video', newVideo);
  }
});