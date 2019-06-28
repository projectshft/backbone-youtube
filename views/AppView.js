//View of the app
var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .video-item' : 'getVideo',
    'click #video-input' : 'getVideo'
  },

  initialize: function() {
    this.$videoInput = this.$('#video-input');

    this.$mainVideo = this.$('#main-video-container');

    this.listenTo(this.model, 'change:current_video', this.renderVideo);
  },

  getVideo: function() {
    this.model.get('videos').queryVideo(this.$videoInput.val())
  },

  renderVideo: function() {

  },

  renderMainVideo: function(video) {
    var mainVideoView = new MainVideoView({
      model: video
    });
  }
})
