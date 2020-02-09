var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
      'click .search': 'createSearch'
    },

  initialize: function () {
      this.$videoList = this.$('.video-list');
      this.listenTo(this.model.get('videos'), 'reset', this.renderVideo);
      
  },
    
  createSearch: function () {
      this.model.get('videos').addSearch(this.$('#search-video').val());
    },

  renderVideo: function (video){
      var videoView = new VideoView({ model: video });

      this.$videoList.append(videoView.render().el)
  },
  
  renderVideos: function(){
    //go through each video, send it to renderVideo
    //to get it render to the page.
    this.model.get('videos').each(function(m){
      this.renderVideo(m)
    }, this)
  }

});