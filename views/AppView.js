var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .submit-search': 'performSearch'
  },

  initialize: function () {

    // this.renderVideos();

    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
  },

  renderVideos: function () {
    var youtubeVideos = this.model.get('videos').models[0].attributes.items
    console.log(youtubeVideos)
    youtubeVideos.forEach(function (m) {
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
