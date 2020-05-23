var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search': 'searchYouTube'
  },

  initialize: function() {
    this.listenTo(this.model.get('videos'), 'add', this.renderVideo);

    this.renderVideos()
  },

  searchYouTube: function () {
    //check if user submitted an empty data value and return error if so
    if (this.$('#search-query').val() === '') {
      return alert('Enter in text for a YouTube search.')
    }
    
    this.model.get('videos').addVideo(
      this.$('#search-query').val()
    );

  },

  //render videos from currentVideoView
  renderVideo: function(video) {

    var currentVideoView = new CurrentVideoView({ model: video });
    
    this.$('.main-video').append(currentVideoView.render().el);
  },

  renderVideos: function () {
    this.model.get('videos').each(function (m) {
      this.renderVideo(m);
    }, this);
  },

});


