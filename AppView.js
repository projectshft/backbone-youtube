var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    //when the search button is clicked, this will call the function that will pass the search value to the api request
    'click #search-button': 'getSearchTermForApiCall',

    //this should change the current video set on the app model to the video that is clicked
    'click .video-thumbnail': 'changeCurrentVideoOnAppModel'

  },

  initialize: function () {
    this.$searchTerm = this.$('#search-input');

    //this will listen for a reset on the videos collection and render the entire page
    this.listenTo(this.model.get('videosCollection'), 'reset', this.renderVideosFromCollection);

    //this will listen to the AppViews model (AppModel's) attribute of current_video to change, which will happen when we click a video in the list
    this.listenTo(this.model, 'change:current_video', this.renderCurrentVideo);
  },

  //this function will get called when the user clicks submit and the searm term(s) will be grabbed and used in our API call
  getSearchTermForApiCall: function () {
    if (this.$searchTerm.val()) {
    var newURL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=' + this.$searchTerm.val() + '&type=video&videoEmbeddable=true&key=AIzaSyAEjf7hDATr-O7ilGfzojLtj3VbsiFw9r8'

    //the newURL will be set on the videos collection (replacing the previous url or the default url)
    this.model.get('videosCollection').url = newURL;

    //this will call the youtube api with the new url set above and replace the videos collection
    appModel.get('videosCollection').fetch({ reset: true });

    }
  },

  //this will change the current_video attribute on the app model and set it to the clicked video
  changeCurrentVideoOnAppModel: function (event) {

    //we're setting the id of the thumbnail image element in the handlebars template, so we can access the id (which is the video model's id), to then change the current_video attribute on the app model to the one that is clicked
    var clickedVideoId = $(event.currentTarget).attr('id');
    this.model.changeAppModelCurrentVideo(clickedVideoId);

  },

  //this is called in the process of rendering a new page from the renderVideosFromCollection function. We will create a new videoview for each video model and append it to the video list div on the page
  renderVideo: function (videoModel) {
    var videoView = new VideoView({ model: videoModel });
    this.$('#video-list-div').append(videoView.render().el);
  },

  //this function will be triggered when the videosCollection is reset. It will iterate through the collection and call the renderVideo function above in that process
  renderVideosFromCollection: function () {
    this.$('#video-list-div').empty();
    this.model.get('videosCollection').each(function (videoModel) {
      this.renderVideo(videoModel);
    }, this);

    this.model.set('current_video', this.model.get('videosCollection').models[0]);
    this.$searchTerm.val('');
  },

  //this function will get called when the user clicks a video on the list and we'll create a currentVideoView (which will have a video model that we get from the app model's current_video) and then render that by using another handlebars template and append to the current-video-div
  renderCurrentVideo: function () {
    this.$('#current-video-div').empty();
    var currentVideoView = new VideoView({ model: this.model.get('current_video') });
    this.$('#current-video-div').append(currentVideoView.renderCurrent().el);
  }

})




