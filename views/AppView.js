const AppView = Backbone.View.extend({

  el: $("body"),
// need inputs for the search
  events: {
    "click #search-button": "searchOnClick",
    "keypress #search-input": "searchOnEnter",
    "click .thumbnail-view": "changePlayingVideo"
  },
// event listeners
  initialize: function () {
    this.listenTo(this.model, "change:playing_video", this.renderPlayingVideo);
    this.listenTo(this.model.get("videos"), "add", this.renderThumbnail);
    this.listenTo(this.model.get("videos"), "update", this.setInitialPlayingVideo);
  },

  searchOnEnter: function (e) {
    if (e.key === "Enter") {
      const searchQuery = $("#search-input").val();
      if (searchQuery) {
        this.model.get("videos").fetchVideoData(searchQuery);
        this.$(".thumbnails-container").empty();
      }
      this.resetInput();
    }
  },

  searchOnClick: function () {
    const searchQuery = $("#search-input").val();
    if (searchQuery) {
      this.model.get("videos").fetchVideoData(searchQuery);
      this.$(".thumbnails-container").empty();
    }
    this.resetInput();
  },

  resetInput: function () {
    $("#search-input").val("").focus();
  },

  // need to set first on list to the first playing video
  setInitialPlayingVideo: function () {
    if (this.model.get("videos").at(0)) {
      $(".playing-video").show();
      $(".error").hide();
      const initialPlayingVideo = this.model.get("videos").at(0).get("videoId");
      this.model.setPlayingVideo(initialPlayingVideo);
    } else {
      $(".playing-video").hide();
      $(".error").show();
    }
  },
  // need function to change the video playing by getting a new videoId
  changePlayingVideo: function (event) {
    const playingVideoId = $(event.currentTarget).data().id;
    this.model.setPlayingVideo(playingVideoId);
  },

  // need render for thumbnail
  renderThumbnail: function (video) {
    const thumbnailView = new ThumbnailView({ model: video });
    this.$(".thumbnails-container").append(thumbnailView.render().el);
  },

  // need the playing video when a change event happens
  renderPlayingVideo: function () {
    const template = Handlebars.compile($("#playing-video-template").html());
    this.$(".playing-video")
      .html(template(this.model.get("playing_video").toJSON()));
  },
  // need render for thumbnail
  renderThumbnail: function (video) {
    const thumbnailView = new ThumbnailView({ model: video });
    this.$(".thumbnails-container").append(thumbnailView.render().el);
  }
});
