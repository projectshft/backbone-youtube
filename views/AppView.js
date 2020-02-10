var AppView = Backbone.View.extend({
  el: $('body'),

  template: Handlebars.compile($('#video-player-template').html()),

  events: {
    'click .search': 'createNewSearch',
  },

  initialize: function () {
    this.$videoList = this.$('.video-list');
    this.$videoPlayer = this.$('.video-player-container');

    //listening for selectedVideo attribute change when user clicks
    //on desired attribute
    this.listenTo(this.model.get('videos'), 'change:selectedVideo', this.renderSelectedVideo);
    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos); 
    this.listenTo(this.model.get('videos'), 'reset', this.resetSearchBar);
  },
    
  createNewSearch: function () {
    //value from user search and sending it to VideosCollection
    //to change url.
    this.model.get('videos').changeSearch(this.$('#search-video').val());

    this.$videoList.empty();
  
    appModel.get('videos').fetch({ reset: true});
  },
  
  renderSelectedVideo: function(){
    this.selectedVideo = this.model.get('videos').findWhere({ selectedVideo: true });

    if(this.selectedVideo){
      this.$videoPlayer.empty();
      this.$videoPlayer.append(this.template(this.selectedVideo.attributes));
      this.model.get('videos');
    }

    return this;
  },

  renderVideo: function(video){ 
    //when page loads, the first video of the collection will 
    //load for currently playing video
    this.model.get('videos').at(0).set('selectedVideo', true);

    var videoView = new VideoView({ model: video });

    this.$videoList.append(videoView.render().el);
  },
  
  renderVideos: function (){
    this.model.get('videos').each(function(m){
      this.renderVideo(m);
    }, this);
  },

  resetSearchBar: function(){
    //after new search gets fetched, search bar will reset
    this.$('#search-video').val('');
  }
});