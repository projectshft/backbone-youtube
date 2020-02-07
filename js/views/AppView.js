var AppView = Backbone.View.extend({
  el: $('body'),

  initialize: function () {
    this.listenTo(this.model, "change:searchTerm", this.newSearch)

    this.listenTo(this.model.get('videos'), "reset", this.initialRender)
  },

  events: {
    "click .search": "userSearch",
    "click .sidebar-image": "changePlayerVideo",
    "click .sidebar-title": "changePlayerVideo"
  },

  newSearch: function() {
    var searchTerm = this.model.get("searchTerm")
    this.model.get('videos').newVideosSearch(searchTerm)
  },

  initialRender: function() {
    this.renderPlayer(this.model.get('videos').at(0).id)

    this.renderSidebar()
  },

  renderPlayer: function(videoId) {
    console.log("Appview.js renderPlayer function firing")
    var videoModel = this.model.get("videos").where({id: videoId})[0]
    var playerView = new PlayerView({ model: videoModel })

    this.$el.find('.video-player').empty()

    this.$el.find('.video-player').append(playerView.render().el)
  },

  renderSidebar: function() {
    this.$el.find('.sidebar').empty()

    for (var i = 1; i < this.model.get("videos").size(); i++) {
      var sidebarVideoModel = this.model.get("videos").at(i)
      var sidebarView = ''
      sidebarView = new SidebarView({ model: sidebarVideoModel})
      this.$el.find('.sidebar').append(sidebarView.render().el)
    }
  },

  userSearch: function(e) {
    var searchValue = $(e.target).siblings("#search-query").val()
    this.model.set("searchTerm", searchValue)
    $(e.target).siblings("#search-query").val("")
  },

  changePlayerVideo: function(e) {
    var videoId = $(e.target).parent().attr("id")
    this.renderPlayer(videoId)
  }
})
