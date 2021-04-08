var AppView = Backbone.View.extend({
  el: ".app",

  events: {
    "click .submit-search": "handleSearchButtonClick",
  },

  initialize: function () {
    this.listenTo(this.model.get("videos"), "update", this.renderVideoList)
  },

  //On search button click, sends the inputted search term to the Videos Collection to fetch data for
  handleSearchButtonClick: function () {
    var searchTerm = this.$(".search-input").val();
    this.model.get("videos").searchVideos(searchTerm);
  },

  //Displays the list of five videos to the side.
  renderVideoList: function () {
    //Go through videos collection to get each video model
    debugger;
    this.model.get("videos").each(function (video) {
      //Create a new view for each video model in videos collection
      var videoView = new VideoView({model: video})
      debugger;
      //Add that view to the list
      this.$(".video-list").append(videoView.render().el)
    }, this)
  },

});