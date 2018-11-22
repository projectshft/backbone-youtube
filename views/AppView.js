const AppView = Backbone.View.extend({
  el: 'body',
  events: {
    'keypress .search-videos': 'addVideos',
    'click .video-list-item': 'changeCurrentVideo'
  },
  initialize() {
    this.$input = $(`.search-videos`);
    this.$videoList = $(`.video-list`);

    this.listenTo(this.model.get('videos'), 'reset', () => { // user searches
      this.renderVideo();
      this.renderVideoList();
    });
    this.listenTo(this.model, 'change:current_video', this.renderVideo) // user selects side video list item
  },

  addVideos(e) {
    if(e.keyCode === 13 && this.$input.val()) {
      this.model.set('query', this.$input.val());
      this.model.get('videos').fetchVideos(this.model.get('query'));
      this.$input.val('');
    }
  },
  
  renderVideo() {
    const videoView = new VideoView({
      model: this.model.get('current_video') || this.model.get('videos').models[0]
    });
    this.$('.main').html(videoView.render().el);
  },

  renderVideoList() {
    this.$videoList.empty();
    for(let i = 1; i < this.model.get('videos').models.length; i++) {
      let video = this.model.get('videos').models[i];
      let videoListView = new VideoListView({model: video});
      this.$videoList.append(videoListView.render().el);
    }
  },

  changeCurrentVideo(e) {
    let newVideoID = e.target.dataset.id;
    let newVideo = this.model.get('videos').findWhere({id: newVideoID});
    this.model.set('current_video', newVideo);
  }
});