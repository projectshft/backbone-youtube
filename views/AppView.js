const AppView = Backbone.View.extend({

  el: $("body"),

  // When the 'search' button is clicked, grab the value in the input box
  events: {
    "click #search-button" : "getSearchQuery",
    "click .thumbnail-view" : "test"
  },

  initialize: function () {
    // this.renderAllThumbnails();
    this.listenTo(this.model.get("videos"), "add", this.renderThumbnail);
  },

  getSearchQuery: function () {
    const searchQuery = $("#search-input").val();
    this.model.get("videos").fetchVideoData(searchQuery);
    this.$(".thumbnails-container").empty();
  },
// Create render methods for each individual thumbnail view
  renderThumbnail: function(video) {
    const thumbnailView = new ThumbnailView({model: video});
    this.$(".thumbnails-container").append(thumbnailView.render().el)
  },

  test: function(e) {
    console.log(e);
    
  }

});