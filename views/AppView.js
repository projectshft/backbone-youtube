var AppView = Backbone.View.extend({
  el: '.page',

  events: {
    'keypress .search-bar': 'createOnEnter',
    'click .video': 'setCurrentVideo',
  },

  initialize: function() {
    this.$currentVideoContainer = this.$('.current-video-container');
    this.$sideVideoList = this.$('.side-video-list');
    this.$input = this.$('.search-bar');

    /*
    The appView should be listening for a video collection reset which occurs after
    a fetch from the youTube api, and a change in the current_video, which will
    occur both after a fetch, and also when a video on the sidebar has been clicked.
    */
    this.listenTo(this.model.get('videos'), 'reset', this.initializeCurrentVideo);
    this.listenTo(this.model, 'change:current_video', this.renderPage);
  },


  createOnEnter: function(e) {
    if (e.which === 13 && this.$input.val()) {
      var queryString = this.$input.val();
      var queryStringNoSpaces = queryString.replace(/ /g, '+');
      var queryStringNoSpacesOrCommas = queryStringNoSpaces.replace(/,/g, '');

      //Upon a new search by the user, the collection should be cleared of all
      //models, then the collection url should be set with the user query. Finally,
      //a fetch will be invoked from the collection.
      this.model.get('videos').reset();
      this.model.get('videos').setQueryAndFetch(queryStringNoSpacesOrCommas);
      this.$input.val('');
    }
  },

  renderSideVideo: function(video) {
    var sideVideo = new VideoView({
      model: video
    });
    this.$sideVideoList.append(sideVideo.render().el);
  },

  renderPage: function() {
    this.$currentVideoContainer.empty();
    this.$sideVideoList.empty();

    //Iterate through all the videos to render both the currently playing video,
    //and also the videos on the sidebar.
    this.model.get('videos').each(function(video) {
      if (video === this.model.get('current_video')) {
        var currentVideo = new CurrentVideoView({
          model: video
        });
        this.$currentVideoContainer.html(currentVideo.render().el);
      } else {
        this.renderSideVideo(video);
      }
    }, this);
  },

  //This method should get invoked upon a reset of the collection. After a fetch,
  //The current_video is just the first video in the collections array.
  initializeCurrentVideo: function() {
    if (this.model.get('videos')) {
      this.model.set('current_video', this.model.get('videos').at(0));
    }
  },

  setCurrentVideo: function(e) {
    var id = e.target.getAttribute('data-videoID');
    var clickedVideo = this.model.get('videos').findWhere({
      videoID: id
    });
    this.model.set('current_video', clickedVideo);
  }

});
