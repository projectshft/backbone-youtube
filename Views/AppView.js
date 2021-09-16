var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search': 'fetchQuery',
    'keyup .search-bar' : 'keyUpHandler',
  },

  initialize: function () {
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
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
    for (var i = 1; i < 6; i++) {
      var thumbnailVideo = this.model.get('videos').models[i];
      var thumbnailView = new ThumbnailView({model:thumbnailVideo});
      this.$('.thumbnail-column').append(thumbnailView.render().el);
    }
  },

});
