var AppView = Backbone.View.extend({
  el: '.page',

  events: {
  'keypress .search-bar': 'createOnEnter',
  'click .video': 'setCurrentVideo',
  },

  initialize: function(){
    this.$currentVideoContainer = this.$('.current-video-container');
    this.$sideVideoList = this.$('.side-video-list');
    this.$input = this.$('.search-bar');
    this.listenTo(this.model.get('videos'), 'reset', this.initializeCurrentVideo);
    this.listenTo(this.model, 'change:current_video', this.renderPage);
  },


  createOnEnter: function (e) {
    if (e.which === 13 && this.$input.val()) {
      var queryString = this.$input.val();
      var queryStringNoSpaces = queryString.replace(/ /g,'+');
      var queryStringNoSpacesOrCommas = queryStringNoSpaces.replace(/,/g,'');

      this.model.get('videos').reset();
      this.model.get('videos').setQueryAndFetch(queryStringNoSpacesOrCommas);
      this.$input.val('');
    }
  },

  renderSideVideo: function(video){
    var sideVideo = new VideoView({model: video});
    this.$sideVideoList.append(sideVideo.render().el);
  },

  renderPage: function() {
    this.$currentVideoContainer.empty();
    this.$sideVideoList.empty();
    this.model.get('videos').each(function(video){
      if (video === this.model.get('current_video')){
        var currentVideo = new CurrentVideoView({model: video});
        this.$currentVideoContainer.html(currentVideo.render().el);
      } else {
        this.renderSideVideo(video);
      }
    }, this);
  },

  initializeCurrentVideo: function() {
    if (this.model.get('videos')) {
      this.model.set('current_video', this.model.get('videos').at(0));
    }
  },

  setCurrentVideo: function(e) {
    var id = e.target.getAttribute('data-videoID');
    var clickedVideo = this.model.get('videos').findWhere({ videoID: id});
    this.model.set('current_video', clickedVideo);
  }

});
