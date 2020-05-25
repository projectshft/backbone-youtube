var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .video-thumbnail': 'updateCurrentVideo',
    'keyup #search-input': 'setSearchTerm'
  },

  initialize: function() {
    // when videos get added, render them and set current video
    this.listenTo(this.model.get('videos'), 'add', this.renderVideos)
    this.listenTo(this.model.get('videos'), 'add', this.setCurrentVideo)

  },

  setSearchTerm: function(eventTarget) {
    var searchInput = $('#search-input').val()

    // disable the submit function so return button doesn't refresh page
    $(function() {
    $("form").submit(function() { return false; });
  });
    // make sure search bar isn't empty
    if (searchInput != '') {
      // on return button, perfrom the search
      if (eventTarget.which === 13) {
        this.model.changeSearchTerm(searchInput);
      }
    }


  },

  updateCurrentVideo: function(eventButton) {
      var clickedVideo = $(eventButton.currentTarget).find('p').text()
      this.model.resetCurrentVideo(clickedVideo)
      this.renderCurrentVideo();
  },

  renderCurrentVideo: function() {
    // empty currentVideo container each time so the video only appears once
    this.$('#current-video').empty()
    // use the currentlyPlaying object as the model for the new view
    this.currentVideo = new CurrentlyPlayingView({ model: this.model.get('currentlyPlaying')});
    // put currentVideo completed html from template into currentVideo container
    this.$('#current-video').append(this.currentVideo.render().el)
  },

  setCurrentVideo: function() {
    // set current video to be the first in the collection
    this.model.set('currentlyPlaying', this.model.get('videos').models[0])
    this.renderCurrentVideo();
  },

  renderVideo: function(video) {
    // create new view based on video model
    var littleVideoView = new LittleVideoView({ model: video });
    this.$('#video-list').append(littleVideoView.render().el)
  },

  renderVideos: function() {
    // empty video container every time so each video only appears once
    this.$('#video-list').empty()
    // render each video individually
    this.model.get('videos').each(function (model) {
      this.renderVideo(model)
    }, this);
  }
});
