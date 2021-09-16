var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search': 'fetchQuery',
    'keyup .search-bar' : 'keyUpHandler',
    'click .thumbnail': 'thumbnailClickHandler',
  },

  initialize: function () {
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
    this.listenTo(this.model, 'change:current_video', this.renderNewShowcase);
  },

  keyUpHandler: function (e) {
    if(e.keyCode == 13){
      this.fetchQuery();
    }
  },

  fetchQuery: function () {
    var query = this.$('#query').val();
    this.model.get('videos').fetchVideos(query);
  },

  renderVideos: function () {
    var showcase = this.model.get('videos').models[0];
    var showcaseView = new ShowcaseView({model: showcase});
    this.$('#showcase').append(showcaseView.render().el);
    this.$('.thumbnail-column').empty();
    for (var i = 0; i < 5; i++) {
      var thumbnailVideo = this.model.get('videos').models[i];
      var thumbnailView = new ThumbnailView({model:thumbnailVideo});
      this.$('.thumbnail-column').append(thumbnailView.render().el);
    }
  },

  thumbnailClickHandler: function (e) {
    var clickedVideoId = $(e.currentTarget).data().id;
    this.model.updateCurrentVideo(clickedVideoId);
  },

  renderNewShowcase: function () {
    var newShowcase = this.model.get('current_video');
    var showcaseView = new ShowcaseView({model: newShowcase});
    this.$('#showcase').append(showcaseView.render().el);
  },

});