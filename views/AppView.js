var AppView = Backbone.View.extend({
  el: '.video-search',

  events: {
    'click #submit': 'searchVideo'
  },

  initialize: function() {
    this.$input = this.$('.search');
    this.$mainVideo = this.$('#mainVideo');
    this.listenTo(VideoCollection, 'change', this.renderVideo);
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

  fetch: function(query) {
    $.ajax({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search?key=AIzaSyBZv7oOxB5qYLsabM8t35bn2frCIjmDtqc&part=snippet&type=video&q=" + query,
      dataType: "json",
      success: function(data) {
        VideoCollection(data);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
    });
  },

  searchVideo: function(query) {
    fetch(query);
  },

});

var query = this.$('.search').val();
