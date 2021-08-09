var AppView = Backbone.View.extend({
  el: $('body'),

  initialize: function() {
    this.$searchInput = this.$('#search-query');
    this.listenTo(this.model.get('videos'), 'add', this.renderVideos)
  },

  events: {
    'click .search': 'ytSearch'
  },  

  ytSearch: function() {
    var query = this.$searchInput.val();
    this.model.get('videos').fetch({data: { q: query}})
  },

  renderVid: function (video) {
    var videoView = new VideoView({model: video});
    this.$('.videos').append(videoView.render().el);
  },

  renderVideos: function () {    
    this.model.get('videos').each(function(m) {
      this.renderVid(m);
    }, this);
  }
})