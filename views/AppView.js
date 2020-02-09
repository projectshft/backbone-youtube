//has a model -- needs to render and then it's delegating smallVideoviews and mainVideoViews
var AppView = Backbone.View.extend({
//Instead of generating a new element, bind to the existing skeleton of the App already present in the HTML.
  el: $('body'),

  events: {

    'click .submit-search': 'searchForVideos',

    'click .thumbnail': 'getNewVideoId'
  },

  initialize: function() {
    //
    this.listenTo(this.model, 'change:current_video', this.renderNewVideo);
    //
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);

  },

  searchForVideos: function() {
    //grabs the input value from the search form
    var query = this.$('#search-input').val();
    //updates the url based on the search form
    this.model.get('videos').updateVideoURL(query);

    this.model.get('videos').fetch({
      reset: true
    });

    this.$('.main-video').empty();
    this.$('.video').empty();
  },

  getNewVideoId: function(e) {
    var clickedVideoId = $(e.currentTarget).data().id;

    this.model.showMainVideo(clickedVideoId);
  },

  renderSmallVideo: function(video) {
    var smallVideoView = new SmallVideoView({
      model: video
    });
    this.$('.small-video-container').append(smallVideoView.render().el);
    return this

  },

  //
  renderMainVideo: function(video) {

    mainVideoView = new MainVideoView({
      model: video
    });

    this.$('.main-video-container').append(mainVideoView.render().el);
  },
  //
  renderNewVideo: function() {
    //
    this.currentView = new MainVideoView({
      model: this.model.get('current_video')
    });
    this.$('.main-video').empty();
    this.renderMainVideo(this.model.get('current_video'));
    this.$('.main-video-containter').append(this.currentView.render().el, this)
  },

  //
  renderVideos: function() {

    this.model.get('videos').each(function(m) {
      this.renderSmallVideo(m);
    }, this);

    this.renderMainVideo(this.model.get('videos').at(0));

  }
});
