var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #submit': 'searchVideo'
  },

  initialize: function() {
    this.$input = this.$('#searchInput');
    this.$mainVideo = this.$('#mainVideo');
    this.listenTo(this.model.get('videoID'), 'add', this.renderVideo);
    this.renderVideo();
  },

  renderVideo: function () {
    var videoView = new VideoView({
      model: VideoModel
    });
    this.$mainVideo.append(videoView.render().el);
  },

  searchVideo: function () {
    var input = this.$input;
    var newvideoSearch = new VideoCollection({
      input: input
    });
    
    newvideoSearch.fetch();

  },


})
