var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search-video' : 'createVideo',
    'click .vid-thumb' : 'handleThumbClick'
  },

  initialize: function () {
    this.listenTo(this.model, 'change:current_video', this.renderMainVideo);
  },

  createVideo: function () {
    $search = this.$('.search-query').val();

    console.log($search);

    this.model.set('current_video', null);

    for (let i = 0; i < sampleData.items.length; i++) {
      const element = sampleData.items[i];
      
      this.model.get('videos').addVideo(
        
        element.snippet.title,
        element.snippet.description,
        element.id.videoId,
        element.snippet.thumbnails.high.url
      );
    }
    this.renderVideos();
  },

  handleThumbClick: function (e) {
    var clickedVideoId = $(e.currentTarget).data().id;

    this.model.updateCurrentVideo(clickedVideoId);
  },
  
  renderVideo: function (videoModel) {
    var videoView = new VideoView({ model: videoModel });
    this.$('.vidListCol').append(videoView.render().el);
  },

  renderMainVideo: function () {
    var currentVideo = this.model.get('current_video');

    if (currentVideo) {
      this.$('.main-video').empty();
      var mainVideoView = new MainVideoView({ model: currentVideo});
      this.$('.main-video').append(mainVideoView.render().el); 
    }
    
  },

  renderVideos: function () {
    this.model.get('videos').each(function (videoModel) {
      this.renderVideo(videoModel);
    }, this);
  }
})