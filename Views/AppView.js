var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search-video': 'searchVideo',
  },

  initialize: function () {
    this.listenTo(this.model.get('videos'), 'reset', function(){
      this.renderVideo();
      this.renderVideos();
    });
    // this.listenTo(this.collection, 'add', this.render)
  },

  searchVideo : function () {
    
    var searchTerm = this.$('#search-input').val();

    this.model.get('videos').setUrlandFetch(searchTerm);

    // this.collection.url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=' + this.$('#search-input').val() + '&type=video&videoEmbeddable=true&key=AIzaSyD9Dx50AZ_Dn1aTHwzUKOQHWHzK5jUlNbw';
    // this.collection.fetch({ reset: true });
   },
  
  // render: function () {
  //   this.renderVideos();
  //   this.renderVideo();
  //   return this;
  // },

  renderVideo: function () {
    var vidView = new MainVidView({ model: this.model.get('videos').at(0)});
    this.$('.active-video').append(vidView.render().el)
  },

  renderVideos: function () {
    this.$('.video-results').empty();

    this.model.get('videos').forEach(function(video){
      var vidView = new VidView ({ model: video })
      this.$('.video-results').append(vidView.render().el)
    });
  }
});

