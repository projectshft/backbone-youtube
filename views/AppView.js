var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .btn': 'handleQuerySearch'
  },

  initialize: function () {
    this.listenTo(this.model.get('videos'), 'update', this.renderAllVideos)
  },

  handleQuerySearch: function () {
    var query = this.$('input').val()
    console.log(query);
    this.model.get('videos').fetch();
  },

  renderAllVideos: function () {
    this.renderBigVideo();
    this.renderSmallVideos();
  },

  renderBigVideo: function () {
    console.log('big vid!');
  },

  renderSmallVideo: function (video) {
    console.log('rendering...');
    var smallVideoView = new SmallVideoView({model: video})
    this.$('.small-video-col').append(smallVideoView.render().el);
  },

  renderSmallVideos: function () {
    console.log('RENDERING!');
    this.model.get('videos').each(function (m) {
      this.renderSmallVideo(m);
    }, this);
  }

})