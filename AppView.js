var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #submit-button': 'getSearchTermForApiCall',

    //this should change the current video set on the app model to the video that is clicked
    //will clicking on the iframe work? I may need to change the target
    'click iframe': 'changeCurrentVideoOnAppModel'
    
  },

  initialize: function () {
    this.$searchTerm = this.$('#search-input');

    //this will listen for a reset on the videos collection and render the entire page
    this.listenTo(this.model.get('videosCollection'), 'reset', this.renderVideosFromCollection);

    //this will listen to the AppViews model (AppModel's) attribute of current_video to change, which will happen when we click a video in the list
    this.listenTo(this.model, 'change:current_video', this.renderCurrentVideo);
  },

  //this function will get called when the user clicks submit and the searm term(s) will be grabbed and be used in our API call
  getSearchTermForApiCall: function () {
    console.log('clicked submit and now inside getSearchTermForApiCall function');
    console.log(`The search input is ${this.$searchTerm.val()}`);

  },

  //this will change the current_video attribute on the app model and set it to the clicked video
  changeCurrentVideoOnAppModel: function (event) {
    //I need to know exactly what data() is getting
    var clickedVideoId = $(event.currentTarget).data().id;
    this.model.changeAppModelCurrentVideo(clickedVideoId);
    
  },

  //this is called in the process of rendering a new page from the renderVideosFromCollection function. We will create a new videoview for each video model and append it to the video list div on the page
  renderVideo: function (videoModel) {
    var videoView = new VideoView({ model: videoModel });
    this.$('#video-list-div').append(videoView.render().el);
  },

  //this function will be triggered when the videosCollection is reset. It will iterate through the collection and call the renderVideo function above in that process
  renderVideosFromCollection: function () {
    this.model.get('videosCollection').each(function (videoModel) {
      this.renderVideo(videoModel);
    }, this);
  },

  //this function will get called when the user clicks a video on the list and we'll create a currentVideoView (which will have a video model that we get from the app model's current_video) and then render that by using another handlebars template and append to the current-video-div
  renderCurrentVideo: function () {
    
    var currentVideoView = new VideoView({model: this.model.get('current_video')});
    this.$('#current-video-div').append(currentVideoView.renderCurrent().el);
  }

})

  
 

