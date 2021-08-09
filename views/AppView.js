/*To fix 
/ Alignment
/ Main video is tiny
/ Allow for a second search without refreshing
/ The five videos render multiple times
*/

var AppView = Backbone.View.extend({
  el: $('body'),

  mainVideo: null,

  initialize: function() {
    this.$searchInput = this.$('#search-query');
    this.listenTo(this.model.get('videos'), 'add', this.renderVideos);
    this.listenTo(this.model.get('videos'), 'add', this.renderInitVideo);
    this.listenTo(this.model, 'change:current_video', this.renderMainVideo)
    
  },

  events: {
    'click .search': 'ytSearch',
    'click .view-video': 'viewVideo'
  },  

  viewVideo: function(e) {
    var clickedVidId = $(e.currentTarget).data().id;
    
    this.model.updateCurrentVideo(clickedVidId);
  },

  ytSearch: function() {
    $(".videos").empty();
    var query = this.$searchInput.val();
    this.model.get('videos').fetch({data: { q: query, reset: true}});
    
  },

  renderVid: function (video) {
    var videoView = new VideoView({model: video});
    this.$('.videos').append(videoView.render().el);
  },

  renderVideos: function () {    
    this.model.get('videos').each(function(m) {
      this.renderVid(m);
    }, this);
  },

 
  renderMainVideo: function() {

    if (this.mainVideo) {
      this.mainVideo.remove();
    }
    this.mainVideo = new MainVideoView({ model: this.model.get('current_video')})
    
    this.$('.current-video').append(this.mainVideo.render().el);
  },

  renderInitVideo: function () {
    this.model.set('current_video', this.model.get('videos').at(0));
  },

})