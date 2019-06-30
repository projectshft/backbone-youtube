var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search-button': "triggerSearchVideos",
  },

  triggerSearchVideos: function() {
    this.model.searchVideos()
    $('#search-input').val("")
  },
})
