var AppView = Backbone.View.extend({
  el: '.video-search',

  events: {
    'click #submit': 'searchVideo'
  },

  initialize: function() {
    this.$input = this.$('.search');
    this.$mainVideo = this.$('#mainVideo');
    this.listenTo(VideoCollection, 'change', this.renderVideo);
    this.listenTo(this.model.get('videos'), "reset", this.renderVideo);
    return this;
    this.renderVideo();
  },

  renderVideo: function() {
    var videoView = new VideoView({
      model: VideoModel
    });
    this.$mainVideo.append(videoView.render().el);
  },

  query: function() {
    this.$('.search').val();
    return this;
  },


  searchVideo: function(query) {
    this.model.get('videos').fetch({ reset: true });
  },

});
