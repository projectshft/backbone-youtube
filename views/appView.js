var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search-video' : 'createVideo'
  },

  createVideo: function () {
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

  renderVideo: function (videoModel) {
    var videoView = new VideoView({ model: videoModel });
    this.$('.vidListCol').append(videoView.render().el);
  },

  renderVideos: function () {
    this.model.get('videos').each(function (videoModel) {
      this.renderVideo(videoModel);
    }, this);
  }
})