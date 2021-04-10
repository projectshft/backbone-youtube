var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search-button': 'updateCurrentQuery',
    'keypress #search-bar': 'enterHandler'
  },

  initialize(){
    this.vidCollection = this.model.get('videos');

    this.listenTo(this.vidCollection, 'reset', this.renderPlayer);
    this.listenTo(this.vidCollection, 'reset', this.renderThumbnail);
    this.listenTo(this.vidCollection, 'reset', this.assignMainPlayer);
  },

  updateCurrentQuery() {
    var query = this.$('#search-bar').val();
    this.model.changeCurrentQuery(query);
    this.$('#search-bar').val('')
  },

  enterHandler(e) {
    if (e.which === 13) {this.updateCurrentQuery()}
  },

  renderPlayer() {
    $('.main-video-container').empty();

    this.vidCollection.each((video) =>{
      var playerView = new PlayerView({model : video});
      this.$('.main-video-container').append(playerView.render().el);
    })
  },

  renderThumbnail() {
    $('.thumbnail-container').empty();

    this.vidCollection.each((video) =>{
      var thumbnailView = new ThumbnailView({model : video});
      this.$('.thumbnail-column').append(thumbnailView.render().el);
    })
  },

  assignMainPlayer() {
    this.vidCollection.at(0).set('mainPlayer', true);
  }
});