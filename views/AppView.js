var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .submit-search': 'performSearch'
  },

  initialize: function () {

    // this.renderVideos();

    this.listenTo(this.model.get('videos'), 'reset', this.renderMainVideo);

    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
  },

  renderMainVideo: function (vid) {
    // console.log(this)

    var mainYoutubeVideo = this.model.get('videos').models[0].attributes.items[0]
    // console.log(mainYoutubeVideo)

    var mainVideoView = new MainVideoView({ model: vid });

    this.$('.main-video').append(mainVideoView.render().el);
  },

  renderVideos: function () {
    var youtubeVideos = this.model.get('videos').models[0].attributes.items
    // console.log(youtubeVideos)
    youtubeVideos.forEach(function (m) {
      // console.log(m)
      this.renderVideo(m);
    }, this);
  },

  renderVideo: function (video) {
    // console.log('this is the video render')
    var videoView = new VideoView({ model: video });
    // console.log(this.$('.video-list'))
    this.$('.video-list').append(videoView.render().el);
  },

  // performSearch: function () {
  //   this.model.get('videos').getSearch(
  //     this.$('#video-input').val(),
  //   );
  // },

});
