//has a model -- needs to render and then it's delegating smallVideoviews and mainVideoViews
var AppView = Backbone.View.extend({

  el: $('body'),

  //two click events in our AppView searchForVideos & getNewVideoId
  events: {

    'click .submit-search': 'searchForVideos',

    'click .thumbnail': 'getNewVideoId'
  },

//At initalization, we listen for two events when we reset the collection
//when the current_video is changed and then render the new Main Video
  initialize: function() {
    //which renderVideos (which renders the smallVideos and the mainVideo)
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);

    this.listenTo(this.model, 'change:current_video', this.renderNewMainVideo);
  },

  searchForVideos: function() {
    //grabs the input value from the search form
    var query = this.$('#search-input').val();
    //updates the url based on the search form
    this.model.get('videos').updateVideoURL(query);
    //fetches  a new video collection 
    this.model.get('videos').fetch({
      reset: true
    });
    //empties the HTML so we can append the new video
    this.$('.main-video').empty();
    this.$('.video').empty();
  },
//when you click on a thumbnail of the smallVideos this captures its id by a data-attribute
//the listenTo function is also called bc the current_video is changed and it renders the new Main Video
  getNewVideoId: function(e) {
    var clickedVideoId = $(e.currentTarget).data().id;
//and it calls the showMainVideo function (in the appModel) which sets the current_video to the new video Clicked
    this.model.setCurrentVideo(clickedVideoId);
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
  renderNewMainVideo: function() {
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
//loops through each small video and renders with the Handlesbars template
    this.model.get('videos').each(function(m) {
      this.renderSmallVideo(m);
    }, this);
//renders the first video in the collection
    this.renderMainVideo(this.model.get('videos').at(0));

  }
});
