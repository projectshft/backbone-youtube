var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    //set events for when the user hits the search button and for when the click on a new video
    'click .submit-video': 'searchForVideo',
    'click .sidebar': 'switchVideo'
  },

  initialize: function() {
    //listens for when the videos are reset
    this.listenTo(this.model.get('videos'), 'reset', this.setVideo);
    //wanted to try and change function to call this.model.setCurrentVideo()
    //set the videos and then render.
    this.listenTo(this.model, 'change:current_video', this.renderVideos);
  },

//when the collection resets this function is called
//calls a function in the appModel to set the value of the current-video to
//the first video in collection
  setVideo:function(){
    this.model.setCurrentVideo()
  },

  //gets id from the video on side bar that was clicked
  //calls function on appModel to reset value of current video
  switchVideo: function(e) {
    var clickedVideoId = $(e.target).data('id')
    this.model.changeCurrentVideo(clickedVideoId)
  },

//takes search input value and calls function in collection to insert in url
//then refetch information
  searchForVideo: function() {
    this.model.get('videos').updateVideoUrl(this.$('#search-input').val())
  },
  
//creates and renders videos view
  renderVideos: function() {
  this.$('.video-list').empty()
    this.model.get('videos').each(function(video) {
      var videoView = new VideoView({
        model: video
      });
      this.$('.video-list').append(videoView.render(video).el);
    }, this);
  }
});
