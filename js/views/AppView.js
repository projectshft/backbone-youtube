var AppView = Backbone.View.extend({
  el: $('body'),

  initialize: function () {
    //Upon initialization AppView listens to changes in
    //AppModel's searchTerm and intiates a new search on change
    this.listenTo(this.model, "change:searchTerm", this.newSearch)

    //When VideosCollection's API request is complete
    //AppView creates a initial render including a PlayerView and a SidebarView
    this.listenTo(this.model.get('videos'), "reset", this.initialRender)
  },

  events: {
    //When the search button is clicked userSearch is called which updates AppModel's searchTerm
    "click .search": "userSearch",
    //When a video in the sidebar is clicked (either it's image or it's title)
    //The clicked video is embeded on the page for play
    "click .sidebar-image": "changePlayerVideo",
    "click .sidebar-title": "changePlayerVideo"
  },

  //update AppModel's searchTerm with the user's input
  newSearch: function() {
    var searchTerm = this.model.get("searchTerm")
    this.model.get('videos').newVideosSearch(searchTerm)
  },

  //Upon initial render (after a new search is made)
  //Render the first result as a playable embeded video
  //And render a SidebarView with the other four videos returned from the API
  initialRender: function() {
    this.renderPlayer(this.model.get('videos').at(0).id)

    this.renderSidebar()
  },

  //Render a playable embeded version of a VideoModel
  //Called once upon a new user search
  //And again whenever the user clicks on a sidebar video
  renderPlayer: function(videoId) {
    var videoModel = this.model.get("videos").where({id: videoId})[0]
    var playerView = new PlayerView({ model: videoModel })

    //Remove current playable video
    this.$el.find('.video-player').empty()

    //Append new playable video
    this.$el.find('.video-player').append(playerView.render().el)
  },

  //Create one SidebarView for each of the last four videos returned
  //from the youtube API
  //And append them to the .sidebar element of the webpage
  renderSidebar: function() {
    this.$el.find('.sidebar').empty()

    for (var i = 1; i < this.model.get("videos").size(); i++) {
      var sidebarVideoModel = this.model.get("videos").at(i)
      var sidebarView = ''
      sidebarView = new SidebarView({ model: sidebarVideoModel})
      this.$el.find('.sidebar').append(sidebarView.render().el)
    }
  },

  //Called when the search button is clicked
  //Get the search term from the input field
  //and use the new search term to update AppModel's searchTerm
  userSearch: function(e) {
    var searchValue = $(e.target).siblings("#search-query").val()
    if (searchValue.length == 0) {
      return alert("Search field cannot be empty!")
    }
    this.model.set("searchTerm", searchValue)
    $(e.target).siblings("#search-query").val("")
  },

  //When a sidebar video is clicked
  //Embed a playeable version of the video on the webpage
  changePlayerVideo: function(e) {
    var videoId = $(e.target).parent().attr("id")
    this.renderPlayer(videoId)
  }
})
