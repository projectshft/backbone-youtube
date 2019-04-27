/*********************************************
 * Render App View (global, top-of-hierchy)
 * ******************************************/

const AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .btn': 'searchVideos',
    'keypress #search-bar': 'searchVideos',
    'click .video-selection': 'updateFeatureVideo'
  },

  initialize: function() {
    this.model.get('videos').getVideos(this.model.get('query'));
    this.$moreVideos = $('.more-videos');
    this.$nowPlaying = $('.nowPlaying');
    this.listenTo(this.model.get('videos'), 'add', this.renderVideo);

    this.listenTo(
      this.model,
      'change:feature_video',
      this.renderFeaturePlayerView
    );

    this.listenTo(
      this.model.get('videos'),
      'reset',
      this.renderVideoList,
      this.renderFeaturePlayerView
    );
  },

  // setFeatureVideo: function() {
  //    set feature_video equal to videos[0] so it will render first video in the list to the feature player (upon page load and upon search returns from the search-bar input)
  //   }
  // },

  updateFeatureVideo: function(e) {
    let selectedVideo = $(e.currentTarget).data().id;
    // console.log('selectedVideo = ', selectedVideo);
    this.model.changeFeatureVideo(selectedVideo);
    // this.model.set('feature_video', selectedVideo);
  },

  searchVideos: function(e) {
    if (e.which === 13 || e.type === 'click') {
      // Set a variable to the value of the user's search
      let query = $('#search-bar').val();
      if (query === '') {
        // Error handling to account for an empty search query
        alert('Please enter a search word or phrase.');
      } else {
        // Set the query attribute
        this.model.set('query', query);
        this.model.get('videos').getVideos(this.model.get('query'));
      }
      this.$('#search-bar').val('');
    }
  },

  renderVideo: function(VideoModel) {
    let listView = new ListView({ model: VideoModel });
    this.$moreVideos.append(listView.render().el);
  },

  renderVideoList: function() {
    // Empty the list view before loading a new list to it
    this.$el.find('.more-videos').empty();
    this.model.get('videos').each(function(m) {
      this.renderVideo(m);
    }, this);
  },

  renderFeaturePlayerView: function() {
    // Empty feature player before loading a new feature to it
    this.$el.find('.nowPlaying').empty();
    let featurePlayerView = new FeaturePlayerView({
      model: this.model.get('feature_video')
    });
    this.$nowPlaying.append(featurePlayerView.render().el);
  }
});
