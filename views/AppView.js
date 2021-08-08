var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .btn': 'handleQuerySearch'
  },

  initialize: function () {
    this.listenTo(this.model.get('videos'), 'update', this.renderBigVideo)
    this.listenTo(this.model.get('videos'), 'update', this.renderSmallVideos)
  },

  handleQuerySearch: function () {
    var query = this.$('input').val()
    console.log(query);
    this.model.get('videos').fetch();
  },

  renderBigVideo: function (video) {
    console.log('big vid!');
    var bigVideoView = new BigVideoView({model: video});
    this.$('.big-video-col').append(bigVideoView.render().el);
  },

  renderSmallVideo: function (video) {
    console.log('small vid!');
    var smallVideoView = new SmallVideoView({model: video});
    this.$('.small-video-col').append(smallVideoView.render().el);
  },

  renderSmallVideos: function () {
    this.model.get('videos').each(function (m) {
      this.renderSmallVideo(m);
    }, this);
  }

})