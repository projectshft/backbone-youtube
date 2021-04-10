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

  //I was torn on whether to keep renderThumbnail() and renderPlayer() separate or to combine them, it looked odd both ways. Let me know what you think!

  renderPlayer() {
    $('.main-video-container').empty();

    this.vidCollection.each((video) =>{
      video.linter('title');
      video.linter('description');
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
    //assigns the first model's 'mainPlayer' attribute to true

    if(this.vidCollection.at(0)){
      this.vidCollection.at(0).set('mainPlayer', true);
      return
    }

    //guard clause stops function, unless VideosCollection is empty. If it is, rendererror() appends error template where mainPlayer would have been
    this.renderError();
  },

  renderError(){
      var errorView = new ErrorView({model : this.model});
      this.$('.main-video-container').append(errorView.render().el);
  }
});