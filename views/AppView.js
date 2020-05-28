var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .submit-search': 'performSearch',
    'click .video': 'changeMainVideo'
  },

  initialize: function () {
    // listening to the main video in the model changing to update the main video playing
    this.listenTo(this.model, 'change:currentVideo', this.renderMainVideoPlaying);

    //listening for model to reset/change based on search to render video list and main video
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
  },

  //changing the main video based on selection from video list
  changeMainVideo: function(select) {
    var clickedVideo = $(select.currentTarget).find('p').text()
    // console.log(clickedVideo)

    //changing the main video in the model
    this.model.changeMainVideo(selectedVideo)
  },

  renderMainVideoPlaying: function() {
    // clear main video in DOM so only one video appears
    this.$('.main-video').empty()
    // determining what the main video is by looking to the model
    this.mainVideo = new MainVideoView({model: this.model.get('currentVideo')})

    this.$('.main-video').append(this.mainVideo.render().el)
  },



  renderVideos: function () {
    var youtubeVideos = this.model.get('videos')
    // clear  video list in DOM so only one set of videos appear
    this.$('.video-list').empty()
    // render each video in search
    youtubeVideos.forEach(function (m) {
      // console.log(m)
      this.renderVideo(m);
      // establish the value of this in the nested function
    }, this);
  },

  renderVideo: function (video) {
    // console.log('this is the video render')
    var videoListView = new VideoListView({ model: video });
    // console.log(this.$('.video-list'))
    this.$('.video-list').append(videoListView.render().el);
  },

  performSearch: function () {
    // taking the value of the search input and passing it to the performSearch function
    var searchInput = $('#video-input').val()
    // console.log(searchInput)
    this.model.performSearch(searchInput)

  },

});
