//View of the app
var AppView = Backbone.View.extend({
  el: $('body'),

  //Events that will get a video if the user clicks either the Search
  //Bar or a video in the side panel
  events: {
    'click .video-item': 'clickVideo',
    'keypress #video-input': 'searchVideo'
  },

  //Defining some jquery variables for renamable access to various
  //static html elements and listening for a change in the current_video
  //in the model to know when to rerender the page
  initialize: function() {
    this.$videoInput = this.$('#video-input');

    this.$mainVideo = this.$('#main-video-container');

    this.listenTo(this.model.get('videos'), 'sync', this.changeVideo);
    this.listenTo(this.model, 'change:current_video', this.renderVideo);
  },

  //Function that sends the keyword to be queried to the youtube API
  searchVideo: function(e) {
    if (e.which === ENTER_KEY) {
      var self = this;
      this.model.get('videos').setURL(this.$videoInput.val());
      this.model.get('videos').fetch();
    }
  },

  //Rerenders the view when the current_video is changed
  changeVideo: function() {
    this.model.currentVideoSet();
  },

  renderVideo: function() {
    
  },

  //Render function for the main video that will be embedded in the page
  renderMainVideo: function(video) {
    var mainVideoView = new MainVideoView({
      model: video
    });
  }
})
