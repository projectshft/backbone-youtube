console.log('inAppView');

var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'keyup .video-search-field': 'fetchOnEnter',
    // 'click img': 'changeVideo',
  },

  initialize: function () {
    this.$input = this.$('#search-input');
    this.$mainVideoContainer = this.$('.main-video-container');
    this.$thumbnailVideoContainer = this.$('.thumbnail-video-container');
    this.$metadata = this.$('.metadata');
    // this.gotoParse();
    this.renderMainVideo();
    this.renderThumbnailVideos();
    this.listenTo(this.model, 'change:current_video', this.renderMainVideo);
    this.listenTo(
      this.model,
      'change:current_video',
      this.renderThumbnailVideos
    );
  },

  gotoParse: function () {
    appModel.get('videosCollection').parse();
  },

  renderMainVideo: function (video) {
    // var thumbnailsArray = [];
    //if a video is being displayed, clear it out
    if (this.videoMainView) {
      this.videoMainView.remove();
    }
    //Create a new Main View instance with only the current video
    //(not a great separation of concerns here)
    var currentVideoObject = this.model.get('current_video')[0];
    this.videoMainView = new VideoMainView({
      model: currentVideoObject,
    });
    //send the current video to the Main View to be rendered
    this.$mainVideoContainer.append(
      this.videoMainView.render(currentVideoObject).el
    );
  },

  renderThumbnailVideos: function () {
    console.log('entering renderthumbnails');
    console.log(appModel.get('current_video'));

    if (this.videoThumbnailView) {
      this.videoThumbnailView.remove();
    }

    this.videoThumbnailView = new VideoThumbnailView();
    this.model.get('videosCollection').each(function (m) {
      this.renderThumbnail(m);
    }, this);

  },
  renderThumbnail: function () {
    
    var videoThumbnailView = new VideoThumbnailView();
    this.$thumbnailVideoContainer.append(videoThumbnailView.render().el);
    

   },

  fetchOnEnter: function (event) {
    console.log('in fetchOnEnter!');
    //If 'enter' key pressed in search box, goto searchVideo function in VideosCollection
    if (event.which === 13) {
      appModel.get('videosCollection').createUrl(this.$input.val());
      this.$input.val('');
    }
  },
});
console.log('leaving AppView');
