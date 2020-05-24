var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search': 'findVideos',
    // 'click .view-video': 'setMainVideo',
  },

  initialize: function () {
    this.$query-input = this.$('#query-input');

    // this.$videoList = this.$('.video-list');
    //
    // this.listenTo(this.model.get('videos'), 'add', this.renderVideo);
    // this.listenTo(this.model, 'hide_video_in_side_view', this.renderSideView);
    //
    // this.listenTo(this.model, 'change:main_video', this.renderMainDisplay);
    // this.listenTo(this.model.get('videos'), 'reset', this.renderPage);
    //
    // this.renderBeers();
  },

  findVideos: function () {
    this.model.get('beers').addBeer(
      this.$nameInput.val(),
      this.$styleInput.val(),
      this.$abvInput.val(),
      this.$imgUrl.val()
    );
  },

  // renderSideView: function (e) {
  //   var clickedVideoId = $(e.currentTarget).data().id; // where is this comming from?
  //
  //   this.model.showCurrentVideo(clickedBeerId);
  // },
  //
  // renderBeer: function (beer) {
  //   var beerView = new BeerView({ model: beer });
  //   this.$beerList.append(beerView.render().el);
  // },
  //
  // renderBeers: function () {
  //   this.model.get('beers').each(function (m) {
  //     this.renderBeer(m);
  //   }, this);
  // },
  //
  // renderDetailView: function () {
  //   if (this.detailView) {
  //     this.detailView.remove();
  //   }
  //
  //   this.detailView = new BeerDetailView({ model: this.model.get('current_beer')});
  //
  //   this.$('.reviews-container').append(this.detailView.render().el);
  // },
});
