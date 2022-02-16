var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search-video' : 'createVideo',
    'click .vid-thumb' : 'handleThumbClick'
  },

  initialize: function () {
    this.listenTo(this.model, 'change:current_video', this.renderMainVideo);
    
    this.listenTo(this.model.get('videos'), 'add', this.renderVideo);

    this.listenTo(this.model.get('videos'))

    this.createVideo();

  },

  createVideo: function () {

    this.model.get('videos').fetch();

    // for (let i = 0; i < sampleData.items.length; i++) {
    // const element = sampleData.items[i];
 
    //   this.model.get('videos').addVideo(
    //     element.snippet.title,
    //     element.snippet.description,
    //     element.id.videoId,
    //     element.snippet.thumbnails.high.url
    //   )
    // }
    
    this.model.set('current_video', null);

  },

  handleThumbClick: function (e) {
    var clickedVideoId = $(e.currentTarget).data().id;

    this.model.updateCurrentVideo(clickedVideoId);
  },
  
  renderVideo: function (videoModel) {
    var videoView = new VideoView({ model: videoModel });
    this.$('.vidListCol').append(videoView.render().el);
    
    if (this.model.get('current_video') == null) {

      this.model.set('current_video', videoModel);
    }
  },

  renderMainVideo: function () {
    if (this.model.get('current_video')) {
      this.$('.main-video').empty();
      var currentVideo = this.model.get('current_video');
    } else {
      var currentVideo = this.model.get('current_video');      
    }
    var mainVideoView = new MainVideoView({ model: currentVideo});
    this.$('.main-video').append(mainVideoView.render().el); 
  },
})