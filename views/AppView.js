var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search': 'searchYouTube'
  },

  initialize: function() {
    this.listenTo(this.model.get('videos'), 'add', this.renderVideos)
  },

  searchYouTube: function () {
    this.model.get('videos').addVideo(
      this.$('#search-query').val()
    );
  },

  renderVideos: function(video) {
    console.log('video');
  }


});


