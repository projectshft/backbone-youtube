var AppView = Backbone.View.extend({
  el: '.video-search',

  events: {
    'click #submit': 'searchVideo'
  },

  initialize: function() {
    this.$input = this.$('.search');
    this.$mainVideo = this.$('#mainVideo');
    this.listenTo(VideoCollection, 'add', this.renderVideo);
    this.renderVideo();
  },

  renderVideo: function () {
    var videoView = new VideoView({
      model: VideoModel
    });
    this.$mainVideo.append(videoView.render().el);
  },

  searchVideo: function () {
    VideoCollection.add({
      'videoID': '',
      'videoTitle': '',
      'videoDesc': '',
    });
      this.$input.val('');
    // var newvideoSearch = new VideoCollection({
    //   input: input
    // });
  alert(this.$input.val());
    // newvideoSearch.fetch();
  },

})
