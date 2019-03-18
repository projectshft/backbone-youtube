const AppView = Backbone.View.extend({

  el: $("body"),

  events: {
    // When the 'search' button is clicked, grab the value in the input box
    "click #search-button": "getSearchQueryOnClick",
    "keypress #search-input": "getSearchQueryOnEnter",
    // When a thumbnail is clicked, change the featured video
    "click .thumbnail-view": "changeFeaturedVideo"
  },

  initialize: function () {
    // Will need to listen to a change in the featured_video attribute, then call a function that renders the featured video 
    this.listenTo(this.model, "change:featured_video", this.renderFeaturedVideo);
    // This ends up hearing an "add" event for each item in the collection, so no need to iterate through the collection
    this.listenTo(this.model.get("videos"), "add", this.renderThumbnail);
    // 'update' fires once during the creation of the collection, so perfect for this function
    this.listenTo(this.model.get("videos"), "update", this.setInitialFeaturedVideo);
  },

  getSearchQueryOnClick: function () {
    const searchQuery = $("#search-input").val();
    if (searchQuery) {
      this.model.get("videos").fetchVideoData(searchQuery);
      this.$(".thumbnails-container").empty();
    }
    this.resetInput();
  },

  getSearchQueryOnEnter: function (e) {
    if (e.key === "Enter") {
      const searchQuery = $("#search-input").val();
      if (searchQuery) {
        this.model.get("videos").fetchVideoData(searchQuery);
        this.$(".thumbnails-container").empty();
      }
      this.resetInput();
    }
  },
  resetInput: function () {
    $("#search-input").val("").focus();
  },
  // Create render methods for each individual thumbnail view
  renderThumbnail: function (video) {
    const thumbnailView = new ThumbnailView({ model: video });
    this.$(".thumbnails-container").append(thumbnailView.render().el);
  },
  // Need a function to set the first video in the collection as the initial featured video
  setInitialFeaturedVideo: function () {
    if (this.model.get("videos").at(0)) {
      $(".featured-video").show();
      $(".error").hide();
      const initialFeaturedVideo = this.model.get("videos").at(0).get("videoId");
      this.model.setFeaturedVideo(initialFeaturedVideo);
    } else {
      $(".featured-video").hide();
      $(".error").show();
    }
  },
  // When a thumbnail is clicked, it invokes a function which should capture the data-id attribute from the video being clicked on, and then call setFeatureVideo and pass the id value 
  changeFeaturedVideo: function (event) {
    const featuredVideoId = $(event.currentTarget).data().id;
    this.model.setFeaturedVideo(featuredVideoId);
  },
  // Render the feature video when a "change" event is heard
  renderFeaturedVideo: function () {
    const template = Handlebars.compile($("#featured-video-template").html());
    this.$(".featured-video")
      .html(template(this.model.get("featured_video").toJSON()));
  }
});