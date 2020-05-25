var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .video-search': 'createVideo'
  },

  // initialize: function () {
  //   this.listenTo(this.model.get('videos', 'add', this.renderVideo));
  // },

  createVideo: function () {
    console.log('test');
  }

  // renderPage: function () {
  //
  // },

  // renderVideo: function () {
  //   console.log(video);
  // },

  // renderVideos: function () {
  //
  // }
});
