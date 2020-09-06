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
    this.gotoParse();
    this.renderThumbnailVideos();
    this.listenTo(
      this.model,
      'change:current_video',
      this.renderThumbnailVideos
    );
  },

  gotoParse: function () {
    appModel.get('videosCollection').parse();
  },

  renderThumbnailVideos: function () {
    console.log('entering renderthumbnails');
    //the thumbnails to render will be returned by the
    //renderMainVideo function
    var thumbnailsToRender = this.renderMainVideo();
    //create a new thumbnailView
    this.videoThumbnailView = new VideoThumbnailView();
    //send the thumbnails to the thumbnailView to render
    this.videoThumbnailView.render(thumbnailsToRender);
  },

  renderMainVideo: function (video) {
    var thumbnailsArray = [];
    //if a video is being displayed, clear it out
    if (this.videoMainView) {
      this.videoMainView.remove();
    }
    //create a new Main View instance with only the current video
    var currentVideoObject = this.model.get('current_video');
    this.videoMainView = new VideoMainView({
      model: currentVideoObject,
    });
    //send the current video to the Main View to be rendered
    this.$mainVideoContainer.append(
      this.videoMainView.render(currentVideoObject).el
    );    
    //create an array of the 5 videos drilled down to relevant attributes
    var allVideos = this.model;
    var allVideosArray = allVideos.attributes.videosCollection.models;
    //send the current video to the Collection to pull out thumbnails
    appModel
      .get('videosCollection')
      .findThumbnails(currentVideoObject, allVideosArray, thumbnailsArray);
    return thumbnailsArray;
  },

  fetchOnEnter: function (event) {
    console.log('in fetchOnEnter!');
    //If 'enter' key pressed in search box, goto searchVideo function in VideosCollection
    if (event.which === 13) {
      appModel.get('videosCollection').createUrl(this.$input.val());
      this.$input.val('');
    };
  },



  // viewVideo: function (e) {
  //   var clickedVideoId = $(e.currentTarget).data().id;

  //   this.model.showNewVideo(clickedVideoId);
  // },
});
console.log('leaving AppView');
