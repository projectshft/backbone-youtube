var AppView = Backbone.View.extend({

  el: $('body'),

  events: {
    'click .search': 'registerSearch'
    // 'click .view-video': 'setMainVideo',
  },

  initialize: function () {
    this.$input = this.$('#query-input'); //leaving alone for right now

    // this.$videoList = this.$('.video-list');
    //
    this.listenTo(this.model.get('videos'), 'initialize', this.renderSideView);
    // this.listenTo(this.model, 'hide_video_in_side_view', this.renderSideView);
    // this.listenTo(this.model, 'change:main_video', this.renderMainDisplay);
  },

  // consider using haschanged????

  registerSearch: function () {
    alert(this.$input.val()); // use this.$input.val()
    this.$input.val(''); // clearing after the fetch()
  },

  renderSideView: function (video) {
    var videoViewSide = new VideoSideView({model: video});
    this.$('.video-list').append(videoViewSide.render().el);
  },

  // renderSideView: function (e) {
  //   var clickedVideoId = $(e.currentTarget).data().id; // where is this comming from?
  //   this.model.showCurrentVideo(clickedBeerId);
  // },
  //

});
