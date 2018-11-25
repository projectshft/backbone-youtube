//build the full page view which correlates with the video collection
var AppView = Backbone.View.extend({
  el: '.full-app',
  //listen for new searches or for clicks on the right column thumbnails
  events: {
    'keypress .search-query': 'search',
    'click .select-video': 'changeMain'
  },
  //bind listeners to the relevant events on the App Model
  initialize: function() {
    this.mainView = null;
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos)
    this.listenTo(this.model, 'change:selectedVideo', this.renderMainVideo)
  },

  //when enter key is pressed, fetch data from the collection. Validation happens on the collection side
  search: function(e) {
    if (e.keyCode === 13) {
      this.model.get('videos').fetchQuery($('.search-query').val());
    }
  },
  //print the full page view, including the selected video as the main video
  renderVideos: function() {
    this.$('.video-list').empty();
    this.model.get('videos').each(function(v) {
      //loop through and render all thumbnails
      this.renderVideo(v);
    }, this);
    //on a new search, set the first video to selected, which will trigger that listener to render it
    this.model.updateSelected(this.model.get('videos').findWhere().get('id'));
  },
  //render a single video in the thumbnail list
  renderVideo: function(video) {
    var videoListView = new VideoListView({
      model: video
    });
    this.$('.video-list').append(videoListView.render().el);
  },
  //render the selected main video in the center
  renderMainVideo: function() {
    if (this.mainView) {
      this.mainView.remove();
    }
    this.mainView = new VideoMainView({
      model: this.model.get('selectedVideo')
    });
    $('.main-video').append(this.mainView.render().el);
  },
  //select a new main video when its thumbnail is clicked
  changeMain: function(e) {
    var clickedVideoId = $(e.currentTarget).data().id;
    this.model.updateSelected(clickedVideoId);
  }
})
