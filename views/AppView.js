var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'keypress #search-bar': 'fetchVideos',
    'click #video-list-img': 'setCurrentVideoModel'
  },

  initialize: function () {
    this.$input = this.$('#search-bar');
    this.$currentVideo = this.$('.current-video__container');
    this.$videoList = this.$('.video-list__container');
    // Render video list view initially and listen for changes when fetching 
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideoListView);
    // listen for changes when the currentVideo changes
    this.listenTo(this.model, 'change:currentVideo', this.renderCurrentVideoView);
  },

  /** Grab user input and fetch videos */
  fetchVideos: function (e) {
    if (e.which === 13 && this.$input.val()) {
      this.model.get('videos').fetchVideos(this.$input.val());
      this.renderVideoListView();
      this.$input.val('');
    }
  },

  /** Render the main video to whatever the currentVideo model is set to */
  renderCurrentVideoView: function () {
    this.$currentVideo.empty();
    var currentVideoView = new CurrentVideoView({ model: this.model.get('currentVideo') });
    this.$currentVideo.append(currentVideoView.render().el);
  },

  /** Set the currentVideo to what the user clicked */
  setCurrentVideoModel: function (e) {
    // console.log($(e.target.data().id))
    var videoId = $(e.target).data().id;
    var modelFound = this.model.findModelById(videoId);
    this.model.set('currentVideo', modelFound);
  },

  /** Loop through videos collections and set each view*/
  renderVideoListView: function () {
    this.$videoList.empty();
    this.model.get('videos').each(function (videoModel) {
      var videoListView = new VideoListView({ model: videoModel });
      this.$videoList.append(videoListView.render().el);
    }, this);
    // set the currentVideo to the first model 
    var firstModel = this.model.get('videos').first();
    this.model.set('currentVideo', firstModel);
  },

});