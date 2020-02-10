var AppView = Backbone.View.extend({

  el: $('body'),

  events: {
    'click .search': 'searchVideo',
    'click .video-title-sidebar': 'viewVideo',
    'click .video-sidebar-img': 'viewVideo',
  },

  initialize: function () {
// save to variables for ease of use
    this.$videoList = this.$('.video-sidebar-container');
    this.$mainVideoList = this.$('.main-video-container');

// invoke the renderVideos function whenever the videos get reset
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
// invoke the renderClickedVideo function whenever the current video changes
    this.listenTo(this.model, 'change:current_video', this.renderClickedVideo);
  },

  searchVideo: function () {
// account for edge case if search input is left blank
    if(this.$('#video-name-input').val() == '') {
      alert('Error. Search input cannot be empty.')
    } else {
// grab the value of the input and pass it to the updateUrl function
    this.model.get('videos').updateUrl(this.$('#video-name-input').val())
    this.$('.main-video').empty();
    this.$('.video').empty();
  }
},
  viewVideo: function (e) {
// grab the id of the clicked video in the sidebar
    var clickedVideoId = $(e.currentTarget).data().id;

// invoke the showVideo function and pass the clickedVideoId to change the current video
    this.model.showVideo(clickedVideoId);
  },

  renderVideo: function (video) {
// create a function that renders the sidebar view
    var smallVideoView = new SmallVideoView({ model: video });
    this.$videoList.append(smallVideoView.render().el);
  },

  renderMainVideo: function (video) {
// create a function that renders the main video view
    var mainVideoView = new MainVideoView({ model: video });
    this.$mainVideoList.append(mainVideoView.render().el);
  },

  renderClickedVideo: function () {
// empty the main-video container and pass the current video to the renderMainVideo function
    this.$('.main-video').empty();
    this.renderMainVideo(this.model.get('current_video'))
  },

  renderVideos: function () {
// render all of the videos to the sidebar view
    this.model.get('videos').each(function (m) {
      this.renderVideo(m);
    }, this);
// render the first video in the collection to the main view
    this.renderMainVideo(this.model.get('videos').at(0))
  }
});
