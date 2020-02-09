var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
      'click .search': 'createSearch'
    },

  initialize: function () {
      this.$videoList = this.$('.video-list');
      this.listenTo(this.model.get('videos'), 'add', this.renderVideo);
      
  },
    
  createSearch: function () {
      this.model.get('videos').addSearch(this.$('#search-video').val());
    },

  renderVideo: function (video){
      var videoView = new VideoView({ model: video });
      this.$videoList.append(videoView.render().el)
  },
  
  // renderMainVideo: function (){
  //     var 
  // }

});