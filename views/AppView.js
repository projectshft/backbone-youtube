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
    this.$moreVideos = $('.more-videos');
    // this.$ytPlayerContainer = $('.yt-player-container');
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

  updateFeatureVideo: function(e) {
    let selectedVideo = $(e.currentTarget).data().id;
    console.log('selectedVideo = ', selectedVideo);
    this.model.changeFeature(selectedVideo);
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
      // query == '';
    }
  },

  renderVideo: function(VideoModel) {
    let listView = new ListView({ model: VideoModel });
    this.$moreVideos.append(listView.render().el);
  },

  renderVideoList: function() {
    this.$el.find('.more-videos').empty();
    // this.$('.more-videos').empty();
    this.model.get('videos').each(function(m) {
      // "m" from Beer-Reviews code
      this.renderVideo(m);
    }, this);
  },

  renderFeaturePlayerView: function() {
    // $('.yt-player-container').empty();
    // this.$el.find('.yt-player-container').empty();
    this.$el.find('.nowPlaying').empty();
    // if (this.featurePlayerView) {
    //   this.featurePlayerView.remove();
    // }
    // $
    let featurePlayerView = new FeaturePlayerView({
      // let featurePlayerView = new FeaturePlayerView({
      model: this.model.get('feature_video')
      // model:
      //   this.model.get('feature_video') || this.model.get('videos').models[0]
    });

    // this.featurePlayerView = this videoList.shift;

    // $('.yt-player-container').append(featurePlayerView.render().el);
    // this.$ytPlayerContainer.append(featurePlayerViewView.render().el);
    this.$nowPlaying.append(featurePlayerView.render().el);
    $nowPlaying.append(featurePlayerView.render().el);
  }
});
