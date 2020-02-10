//has a model -- needs to render and then it's delegating smallVideoviews and mainVideoViews
var AppView = Backbone.View.extend({

  el: $('body'),

  //The DOM specific events for updating the video search & getting data attribute: id from the video thumbnail
  events: {

    'click .submit-search': 'searchForVideos',

    'click .thumbnail': 'getNewMainVideoId'
  },

  //At initalization, we listen to reset the collection and render all videos
  //when the current_video is changed and then render the new Main Video
  initialize: function() {
    //which renderVideos (which renders the smallVideos and the mainVideo)
    this.listenTo(this.model.get('videos'), 'reset', this.renderAllVideos);

    this.listenTo(this.model, 'change:current_video', this.renderNewMainVideo);
  },

  searchForVideos: function() {
    //grabs the input value from the search form
    var query = this.$('#search-input').val();
    //updates the url based on the search form
    this.model.get('videos').updateVideoURL(query);
    //fetches  a new video collection
    this.model.get('videos').fetch({
      reset: true,
      //edge cases
      success: (function() {
        //can also alert the user when service request is successful but creates a slower UI
        // alert(' Service request success: ');
      }),
      error: (function(e) {
        alert(' Service request failure: ' + e);
      }),
      complete: (function(e) {
        alert(' Service request completed ');
      })
    });;
    //empties the HTML so we can append the new video
    this.$('.main-video').empty();
    this.$('.video').empty();
  },
  //when you click on a thumbnail of the smallVideos this captures its id by a data-attribute
  //the listenTo function is also called bc the current_video is changed and it renders the new Main Video
  getNewMainVideoId: function(e) {
    var clickedVideoId = $(e.currentTarget).data().id;
    //and it calls the showMainVideo function (in the appModel) which sets the current_video to the new video Clicked
    this.model.setCurrentVideo(clickedVideoId);
  },

  //this renders the five videos thumbnail and title
  renderSmallVideo: function(video) {
    var smallVideoView = new SmallVideoView({
      //it takes the video model as its parameter and
      model: video
    });
    //appends its element to the class .small-video-container div
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
  //renders the new main video by setting the model to the current_video model
  renderNewMainVideo: function() {

    newMainVideoView = new MainVideoView({
      model: this.model.get('current_video')
    });
    this.$('.main-video').empty();
    this.renderMainVideo(this.model.get('current_video'));
    this.$('.main-video-containter').append(newMainVidewView.render().el, this)
  },


  renderAllVideos: function() {
    //loops through each small video and renders with the Handlesbars template
    this.model.get('videos').each(function(m) {
      this.renderSmallVideo(m);
    }, this);
    //renders the first video in the collection
    this.renderMainVideo(this.model.get('videos').at(0));

  }
});
