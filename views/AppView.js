
var AppView = Backbone.View.extend({
 
  el: $('body'),

  events: {
    'click .btn': function(e) {
      this.userSearch(e);
      this.clearVideos(e);
    },

    'click .video': 'clickVideoHandler'
  
  }, 

  initialize: function(){ 
    this.$video = this.$('.video');
    this.$videos = this.$('.videosList');
    this.$mainVideo = this.$('.main-vid');
    this.listenTo(this.model.get('videos'), 'update', this.render);
    

  },

  clickVideoHandler: function(e) {
    var clickedVideoId = $(e.currentTarget).data().id;
    this.model.displayVideo(clickedVideoId);

  },

  clearVideos: function() {
    this.$videos.empty();
    this.model.get('videos').reset();
  },

  userSearch: function() {
    if(this.$('.input').val()) {
      var userInput = this.$('.input').val();
      this.model.get('videos').searchVideo(userInput);
    }
  },

  render: function() {
    this.model.get('videos').forEach((clip) => {
      var videoModel = new VideoModel({
        url: clip.attributes.url,
        title: clip.attributes.title,
        describtion: clip.attributes.describtion,
        id: clip.attributes.id
      })
      var videoView = new VideoView({model: videoModel});
      var newVideoHtml = videoView.render().el;
      this.$videos.append(newVideoHtml);
    });
    return this;
  },

});

