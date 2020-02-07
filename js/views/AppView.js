var AppView = Backbone.View.extend({
  el: $('body'),

  initialize: function () {
    this.listenTo(this.model, "change:searchTerm", this.newSearch)

    this.listenTo(this.model.get('videos'), "reset", this.initialRender)
  },

  newSearch: function() {
    var searchTerm = this.model.get("searchTerm")
    this.model.get('videos').newVideosSearch(searchTerm)
  },

  initialRender: function() {
    this.renderPlayer(this.model.get('videos').at(0).id)
  },

  renderPlayer: function(videoId) {
    var videoModel = this.model.get("videos").where({id: videoId})[0]
    var playerView = new PlayerView({ model: videoModel })

    this.$el.find('.video-player').empty()

    this.$el.find('.video-player').append(playerView.render().el)
  }
})
