var AppView = Backbone.View.extend({
  el: $("main"),

  videoView: null,

  events: {
    "click .search-btn": "handleSearch",
    "click .wrapper-single-vid": "handleMainVidSwitch",
    "click .single-video-title": "showFullTitle",
  },

  initialize: function () {
    //Initializing a dog search at load and then listening for changes
    this.model.get("videos").getData("dogs");
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
      this.model.get("videos").getData(searchTerm);
    }
    //Clearing out input for next search
    this.$input.val("");
  },

  //Please note that for the click event to work on the iframe, I wrapped the iframe in an empty div that lays on top of the iframe absolutely. Otherwise, it wouldn't register.
  handleMainVidSwitch: function (e) {
    var targetVidId = $(e.target).data("id");
    this.model.set(
      "main_video",
      this.model.get("videos").findWhere({ id: targetVidId })
    );

    this.renderSideVideos();
  },

  showFullTitle: function (e) {
    $(e.target).toggleClass("single-video-title");
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
});
