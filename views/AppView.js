var AppView = Backbone.View.extend({
  el: '.full-app',
  events: {
    'keypress .search-query': 'search'
  },

  //on initialize, bind to the relevant events on the videos collection
  //TODO - figure out which event is actually triggering and fix this
  initialize: function() {
    this.listenTo(videoCollection, 'reset', this.renderVideos)
  },

  search: function(e) {
    if (e.keyCode === 13) {
    videoCollection.fetchQuery($('.search-query').val());
  }
  },

  renderVideos: function() {
    console.log(videoCollection);
    var selectedModel = videoCollection.shift();
    console.log(selectedModel);
    var videoMainView = new VideoMainView({model: selectedModel});
    this.$('.main-video').append(videoMainView.render().el);
    videoCollection.each(function (v) {
      this.renderVideo(v);
    }, this);
  },

    renderVideo: function(video) {
      var videoListView = new VideoListView({model: video});
      this.$('.video-list').append(videoListView.render().el);

    }
})
