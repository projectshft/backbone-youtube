/* Controls rendering of the full page view along with handling event listeners and what is displayed on the 
   page at any given time */

const AppView = Backbone.View.extend({
  el: $('body'),

  // Event listeners for a keypress in the search box or if a video from the side video list is clicked
  
  events: {
    'keypress #search': 'searchVideos',
    'click .video-list-entry': 'switchCurrentVideo'
  },

  /* Creates listeners for the current video to change and for when a new search is performed 
     that tells the view what new things to render */

  initialize: function () {
    // this.model.get('videos').fetchVideos(this.model.get('query'));
    this.listenTo(this.model, 'change:current_video', this.renderCurrentVideo);
    this.listenTo(this.model.get('videos'), 'reset', function () {
      this.renderCurrentVideo();
      this.renderVideoList();
    });
  },

 /* When enter is hit in the search box and it isn't empty this function resets the current video, 
    sets the models query value to what is in the search box, then passes that value to the function
    which grabs the data from the API. It then sets the search box back to an empty value. */

  searchVideos: function (e) {
    if(e.which == 13 && this.$('#search').val()) {
      this.model.set('current_video', null);
      this.model.set('query', this.$('#search').val());
      this.model.get('videos').fetchVideos(this.model.get('query'));
      this.$('#search').val('');
    }
  },

  /* Sets the current video to the video you clicked on in the side video list or
     the first video returned when a new search is made.  This is then passed off to be
     rendered by the current video view and the result is rendered to the page */

  renderCurrentVideo: function () {
    const currentVideoView = new CurrentVideoView({
      model: this.model.get('current_video') || this.model.get('videos').models[0]
    });
    this.$('.current-video-area').html(currentVideoView.render().el);
  },

  /* Empties out the current side video list then loops through the current collection of models, has 
     the video list view render each list entry, then appends that entry to the page */

  renderVideoList: function () {
    this.$('.video-list').empty();
    for(let i = 1; i < this.model.get('videos').models.length; i++) {
      let video = this.model.get('videos').models[i];
      let videoListView = new VideoListView({model: video});
      this.$('.video-list').append(videoListView.render().el);
    }
  },

  /* When a video in the side video list is clicked the id associated with that video is grabbed,
     it looks through the collection for which video has that id, and then sets the current video
     to that video */

  switchCurrentVideo : function (e) {
    const clickedVideoID = e.target.dataset.id;
    const clickedVideo = this.model.get('videos').findWhere({id: clickedVideoID});
    this.model.set('current_video', clickedVideo);
  }
});