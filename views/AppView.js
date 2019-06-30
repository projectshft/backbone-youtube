var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search-button': "triggerSearchVideos",
  },

  initialize: this.listenTo(this.model.get('current_video_queue'), 'change', this.renderPage),

  triggerSearchVideos: function() {
    this.model.searchVideos()
    $('#search-input').val("")
  },

  renderPage: function () {
    console.log("happy days!!")
  }
})
