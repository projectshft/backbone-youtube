var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search-video': 'searchVideo',
  },

  initialize: function () {
    this.listenTo(this.model.get('video'), 'add', this.renderVideo);
  },

  searchVideo : function () {
    this.model.get('video').searchVideos(
      this.$('#search-input').val(),
     );  
   },

  renderVideo: function (video) {
    var vidView = new VidView({ model: video });
    this.$('.active-video').append(vidView.render().el)
  },

  renderVideos: function () {
    this.model.get('video').each(function (m) {
      this.renderVideo(m);
    }, this);
  }
});

