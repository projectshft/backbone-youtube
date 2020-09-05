var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'keyup .video-search-field': 'fetchOnEnter',
  },

  initialize: function () {
    this.$input = this.$('#search-input');
    this.renderThumbnailVideos();
    this.listenTo(
      this.model,
      'change:current_video',
      this.renderThumbnailVideos
    );
    // this.renderThumbnailVideos();
    // this.listenTo(this.model, 'change:current_video', this.renderMainVideo);
  },

  renderThumbnailVideos: function () {
    var thumbnailsToRender = this.renderMainVideo();
    console.log('rendering thumbnails! for this array:');
    console.log(thumbnailsToRender);
    console.log('hello??');
    // if (this.videoThumbnailView) {
    //   this.videoThumbnailView.remove();
    // }

    // this.videoThumbnailView = new videoThumbnailView({ model: videos });
    // this.$('.thumbnail-video-container').append(this.videoThumbnailView.render().el);
  },

  renderMainVideo: function (video) {
    //if a video is being displayed, clear it out
    var thumbnailsArray = [];
    if (this.videoMainView) {
      this.videoMainView.remove();
    }

    //create a new Main View instance with only the current video
    this.videoMainView = new VideoMainView({
      model: this.model.get('current_video'),
    });
    var currentVideoObject = this.model.get('current_video');
    var allVideos = this.model;
    var allVideosArray = allVideos.attributes.videosCollection.models;

    //send the current video to the Main View to be rendered
    this.$('.main-video-container').append(
      this.videoMainView.render(currentVideoObject).el
    );
    //send the current video to the Collection to find thumbnails
    appModel
      .get('videosCollection')
      .findThumbnails(currentVideoObject, allVideosArray, thumbnailsArray);
    return thumbnailsArray;
  },

  fetchOnEnter: function (event) {
    console.log('in fetchOnEnter!');
    //If 'enter' key pressed in search box, goto searchVideo function in VideosCollection
    if (event.which === 13) {
      // console.log('confirmed enter key');
      // console.log(this.$input.val());
      // console.log(appModel.get('videosCollection'));
      appModel.get('videosCollection').createUrl(this.$input.val());
    }
  },

  viewVideo: function (e) {
    var clickedVideoId = $(e.currentTarget).data().id;

    this.model.showNewVideo(clickedVideoId);
  },
});
