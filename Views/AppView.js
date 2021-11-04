var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search-video': 'searchVideo',
  },

  initialize: function () {
    this.listenTo(this.model.get('video'), 'add', this.renderVideo);
    this.listenTo(this.collection, 'add', this.render)
  },

  searchVideo : function () {
    this.collection.url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=' + this.$('#search-input').val() + '&type=video&videoEmbeddable=true&key=AIzaSyD9Dx50AZ_Dn1aTHwzUKOQHWHzK5jUlNbw';
    this.collection.fetch({ reset: true });
   },

  
  render: function () {
    this.renderVideos();
    this.renderVideo();
    return this;
  },


  renderVideo: function () {
    var vidView = new MainVidView({ model: this.collection.at(0)});
    this.$('.active-video').append(vidView.render().el)
  },

  renderVideos: function () {
    this.$('.video-results').empty();
    for(var i = 0; i < this.collection.length; i++){
      var vidView = new VidView ({ model: this.collection.at(i)})
      this.$('.video-results').append(vidView.render().el)
    }
  }

});

