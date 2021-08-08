var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .btn': 'handleQuerySearch'
  },

  initialize: function () {
    this.listenTo(this.model.get('videos'), 'update', this.renderBigVideos);
    this.listenTo(this.model.get('videos'), 'update', this.renderSmallVideos);
  },
  
  handleQuerySearch: function () {
    var query = this.$('input').val()
    this.model.get('videos').updateQuery(query);
    this.model.get('videos').fetch();
  },

  renderBigVideo: function (video) {
    var bigVideoView = new BigVideoView({model: video});
    this.$('.big-video-col').append(bigVideoView.render().el);
  },

  renderBigVideos: function () {
    this.model.get('videos').each(function (m) {
      this.renderBigVideo(m);
    }, this);
  },

  renderSmallVideo: function (video) {
    var smallVideoView = new SmallVideoView({model: video});
    this.$('.small-video-col').append(smallVideoView.render().el);
  },

  renderSmallVideos: function () {
    this.model.get('videos').each(function (m) {
      this.renderSmallVideo(m);
    }, this);
  }

})