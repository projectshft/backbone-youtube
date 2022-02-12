var AppView = Backbone.View.extend({
  el: $("main"),

  videoView: null,

  events: {
    "click .search-btn": "handleSearch",
    "click .wrapper-single-vid": "handleMainVidSwitch",
  },

  initialize: function () {
    //Initializing a dog search at load and then listening for changes
    this.model.get("videos").getData("puppies");
    this.$input = this.$(".search-input");

    this.listenTo(this.model.get("videos"), "reset", this.renderVideos);
    this.listenTo(this.model, "change:main_video", this.renderMainVideo);
  },

  handleSearch: function () {
    //If we have any input, get the search term and send to Video Collection to fetch, parse data, and add to collection;
    if (!this.$input.val()) {
      alert("please enter a valid search term");
    }

    if (this.$input.val()) {
      var searchTerm = this.$input.val();
      this.model.set("searchTerm", searchTerm);
      this.model.get("videos").getData(searchTerm);
    }
    //Clearing out input for next search
    this.$input.val("");
    this.checkSearch(searchTerm);
  },

  //Please note that for the click event to work on the iframe, I wrapped the iframe in an empty div that lays on top of the iframe absolutely. Otherwise, it wouldn't register.
  handleMainVidSwitch: function (e) {
    var targetVidId = $(e.target).data("id");
    var videoToSwitch = this.model.get("videos").findWhere({ id: targetVidId });
    this.model.set("main_video", videoToSwitch);

    //Have to call this to re-render the side panel
    this.renderSideVideos();

    //Also calling this function to save clicked videos to local storage
    var videoUrl = videoToSwitch.attributes.bigUrl;
    var videoName = videoToSwitch.attributes.title;
    this.setToStorage(videoName, videoUrl);
  },

  //This next function is the 'entry point to render upon 'reset'. I'm arbitriarily choosing the first result that returns as the 'main' video. That will trigger the renderMainVideo function (via listening above) and I'll call the side video in addition;
  renderVideos: function () {
    var mainVideo = this.model.get("videos").models[0];
    this.model.set("main_video", mainVideo);
    this.renderSideVideos();
  },

  renderMainVideo: function () {
    //Whatever is currently there, we want to remove it and then set a new view
    if (this.videoView) {
      this.videoView.remove();
      $(".main-video-container").html("");
    }
    this.videoView = new MainVideoView({ model: this.model.get("main_video") });
    this.$(".main-video-container").append(this.videoView.render().el);
  },

  renderSideVideos: function () {
    $(".sidebar-video-container").html("");
    this.model.get("videos").each(function (vid) {
      this.videoView = new SidebarVideoView({ model: vid });
      this.$(".sidebar-video-container").append(this.videoView.render().el);
    }, this);
  },

  //Setting the videos to local storage;
  setToStorage: function (vidName, vidUrl) {
    var existingVideos = JSON.parse(localStorage.getItem("faveVideos"));
    if (existingVideos == null) existingVideos = [];
    var video = {
      name: vidName,
      url: vidUrl,
    };

    existingVideos.push(video);
    localStorage.setItem("faveVideos", JSON.stringify(existingVideos));
  },

  checkSearch: function (search) {
    var existingVideos = JSON.parse(localStorage.getItem("faveVideos"));
    console.log(existingVideos);
    existingVideos.forEach(function (vid) {
      var lowerCaseSearch = search.toLowerCase();
      if (vid.name.toLowerCase().includes(lowerCaseSearch)) {
        $(".repeat-watch").css("display", "block");
        var details = $(".watch-details");
        $(details).html(`${vid.name} at ${vid.url}`);
      }
      setTimeout(function () {
        $(".repeat-watch").css("display", "none");
      }, 8000);
    });
  },
});
