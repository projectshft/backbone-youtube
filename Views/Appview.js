var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search': 'searchVideo',
    'click .vidPlayer': 'vidPlayer'
  },

  initialize: function () {
    this.listenTo(this.model.get('videos'), 'add', this.renderVideo);
    // this.listenTo(this.model, 'change:show_reviews', this.renderPage);
    // this.listenTo(this.model, 'change:current_beer', this.renderDetailView);

    this.renderVideos();
  },

  vidPlayer: function (e) {
    var clickedVidId = $(e.currentTarget).data().id;
  
    this.model.updateCurrentVideo(clickedVidId);
    //this.model.showReviews();
  },

  renderVideo: function (video) {
    var selectedView = new SelectedView({ model: video });
    this.$('.vid').append(selectedView.render().el);
  },

  renderVideos: function () {
    this.model.get('videos').each(function (m) {
      this.renderVideo(m);
    }, this);
  }
});