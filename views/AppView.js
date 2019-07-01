//View of the app
var AppView = Backbone.View.extend({
  el: $('body'),

  //Events that will get a video if the user clicks either the Search
  //Bar or a video in the side panel
  events: {
    'keypress #video-input': 'searchVideo',
    'click .video-item' : 'clickVideo'
  },

  //Defining some jquery variables for renamable access to various
  //static html elements and listening for a change in the current_video
  //in the model to know when to rerender the page
  initialize: function() {
    this.$videoInput = this.$('#video-input');

    this.$mainVideo = this.$('#main-video-container');
    this.$videoList = this.$('#video-list-container');

    //Need to listen for the model to sync before I can set the current video
    this.listenTo(this.model.get('videos'), 'sync', this.changeVideo);
    this.listenTo(this.model, 'change:current_video', this.renderVideo);
  },

  //Function that sends the keyword to be queried to the youtube API
  searchVideo: function(e) {
    if (e.which === ENTER_KEY) {
      var self = this;
      this.model.get('videos').setURL(this.$videoInput.val());
      this.model.get('videos').fetch({reset: true});
    }
  },

  //Rerenders the view when the current_video is changed
  changeVideo: function() {
    this.model.currentVideoSet();
  },

  //When a sidebar video is clicked it will set the url to the ID of the clicked
  //item, change the model, and render a new view
  clickVideo: function(e) {
    this.model.get('videos').setURL(e.target.id);
    this.model.get('videos').fetch({reset: true});
  },

  //Main function to render both the Main Video View and the Video List View
  renderVideo: function() {
    this.renderMainVideo(this.model.get('current_video'));
    this.renderVideoList()
  },

  //Render function for the main video that will be embedded in the page
  renderMainVideo: function(video) {
    this.$mainVideo.empty();
    var mainVideoView = new MainVideoView({
      model: video
    });
    this.$mainVideo.append(mainVideoView.render().el);
  },

  //Function for rendering each individual side video
  renderSideVideo: function(video) {
    var videosListView = new VideosListView({
      model: video
    })
    this.$videoList.append(videosListView.render().el);
  },

  //Function that iterates through the collection of videos and
  //renders the side panel of videos, finishes by removing the first one
  renderVideoList: function() {
    this.$videoList.empty();
    this.model.get('videos').each(function(video) {
      this.renderSideVideo(video);
    }, this)
    $('.video-item').eq(0).remove();
  }
})
