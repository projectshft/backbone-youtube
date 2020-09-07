var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'keyup .video-search-field': 'fetchOnEnter',
    'click img': 'viewVideo',
  },

  initialize: function () {
    this.$videoList = this.$('.video-list');
    this.$mainVideo = this.$('.main-video-container');
    this.$input = this.$('#search-input');
    //Listen for a change in current_video and re-render the main (=current) video
    this.listenTo(this.model, 'change:current_video', this.renderMainView);
    //When videos are added to the collection, render
    this.listenTo(this.model.get('videos'), 'add', this.renderVideo);
    //When videos are returned from fetch and a reset event fires, render the thumbnails
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
    //Goto render thumbnail images on load
    this.renderVideos();
  },

  //first part of rendering the thumbnail list
  //TOFIX: render only 4 thumbnails instead of 5. Attempts to shunt 
  //'current' and 'thumbnail' videos into separate arrays succeeded
  //but switching active videos on thunbnail click became tangled.
  renderVideos: function () {
    //Grab the videos collection, loop through it and send each 
    //video to be rendered
    this.model.get('videos').each(function (video) {
      this.renderVideo(video);
    }, this);
  },

  //second part of rendering the thumbnail list
  renderVideo: function (video) {
    var videoView = new VideoView({ model: video });
    //Send to videoView's render function to set into Handlebars template
    //and then return here to append to the DOM
    this.$videoList.append(videoView.render().el);
    //GOTO render the main (current) video
    this.renderMainView();
  },
  renderMainView: function () {
    //If there is a main video view, clear it out before render
    if (this.videoMainView) {
      this.videoMainView.remove();
    }
    //Terrible separation of concerns, but desperate attempt to show a main
    //video ("current_video") on load.
    //If the "current_video" value is null, as it is when page loads, show
    //a hardcoded default. (Send a default value to appModel to render)
    //TOFIX: Figure out how to grab video at (0) in collection to show it.
    if (!this.model.get('current_video')) {
      this.model.showVideo('https://i.ytimg.com/vi/dYXBip9bZME/default.jpg');
    }
    //Else, create a new video main view with the current_video
    this.videoMainView = new VideoMainView({
      model: this.model.get('current_video'),
    });
    //Send to videoMainView's render function to set into Handlebars template
    //and then return here to append to the DOM
    this.$mainVideo.append(this.videoMainView.render().el);
  },

  viewVideo: function (e) {
    //Grab the thumbnail value of the clicked video and send
    //it to appModel's showVideo function
    var clickedVideoThumbnail = $(e.currentTarget)[0].currentSrc;
    this.model.showVideo(clickedVideoThumbnail);
  },

  fetchOnEnter: function (event) {
    // console.log('in fetchOnEnter!');
    //If 'enter' key pressed in search box and box is empty, alert
    if (event.which === 13) {
      if (!this.$input.val()) {
        alert("Please enter a search word or phrase and hit 'enter'.");
      }
      alert("Hello! If this page does not display your searched videos, it is either because the page is hardcoded, the API is not allowing us in, or the API did not return anything. Please either change the commenting in main.js or try your search again later.")
      //Else, take the search term to url function in VideosCollection
      //ALERT that this feature is largely untested because of problems with
      //hitting my API quota. FIXES are likely needed.
      appModel.get('videos').url(this.$input.val());
      //Clear out input field
      this.$input.val('');
      //Fetch new videos based on new url
      appModel.get('videos').fetch({ reset: true });
    }
  },
});
