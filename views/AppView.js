var AppView = Backbone.View.extend({
  el: ".app",

  events: {
    "click .submit-search": "handleSearchButtonClick",
    "click .media": "handleVideoListClick",
    "keyup .search-input": "handleEnterButtonPress",
  },

  initialize: function () {
    this.listenTo(this.model.get("videos"), "update", this.renderVideoList)
    this.listenTo(this.model, "change:currentVideo", this.renderCurrentVideo)
    $(window).on('scroll', this.checkIfAtBottomOfPage(this))
    this.listenTo(this.model, "change:endOfResults", this.toggleEndOfResultsDiv)
  },

  //On search button click, sends the inputted search term to the App Model to update search term and begin new search
  handleSearchButtonClick: function () {
    var searchTerm = this.$(".search-input").val();
    this.$(".search-input").val('')
    this.model.updateSearchTerm(searchTerm);
  },

  //On user pressing enter while typing in the search box, the search button will click to begin a search
  handleEnterButtonPress: function (e) {
    if(e.keyCode === 13) {
      $(".submit-search").click();
    }
  },

  //Upon user clicking on video from the video list, tells the model to change the current video
  handleVideoListClick: function (e) {
    var clickedVideoId = $(e.currentTarget).data("id")
    this.model.setCurrentVideo(clickedVideoId);
  },

  //Displays the list of videos to the side.
  renderVideoList: function () {
    //Clears out anything currently in the video list
    this.$(".video-list").html('')
    //Go through videos collection to get each video model
    this.model.get("videos").each(function (video) {
      //Create a new view for each video model in videos collection
      var videoView = new VideoView({model: video})
      //Add that view to the list
      this.$(".video-list").append(videoView.render().el)
    }, this)
  },

  //Displays the current video
  renderCurrentVideo: function () {
    //Clears out the current display
    this.$(".current-video").html('');
    //Create a new view for the currentVideo model
    var currentVideoView = new CurrentVideoView({model: this.model.get("currentVideo")});
    this.$(".current-video").append(currentVideoView.render().el);
  },

  //Load 5 new videos upon user scrolling to the bottom of the page
  checkIfAtBottomOfPage: function (context) {
    return function (event) {
      if($(window).scrollTop() + $(window).height() + 10 >= $(document).height()) {
        var searchTerm = context.model.get("currentSearchTerm");
        var newNumberOfResultsToDisplay = context.model.get("videos").length + 5;
        context.model.get("videos").searchVideos(searchTerm, newNumberOfResultsToDisplay)
      }
    }
  },

  //Toggles the d-none class (bootstrap for display: none) to reveal the div stating "End of Search Results" upon user reaching the max number of 50 videos in the search.
  toggleEndOfResultsDiv: function () {
    this.$(".end-of-results").toggleClass('d-none', !this.model.get("endOfResults"))
  }
  


});