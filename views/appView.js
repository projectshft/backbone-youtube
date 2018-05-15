var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'keypress #video-search-input': "setQuery",
  },

  initialize: function() {
    this.$searchInput = this.$('#video-search-input'),
    this.$videoSection = this.$('#current-video-section'),
    this.$playlistSection = this.$('#playlist-section'),

    this.$playlistSection.on('scroll', this.fetchMoreVideos),
    this.listenTo(this.model, 'change:query', this.clearPlaylist);
    this.listenTo(this.model, 'change:playingVideo', this.renderPlayer);
    this.listenTo(this.model.get('videos'), 'add', this.renderPlaylist);
  },

  // setting input (query) to app model
  setQuery: function(e) {
    // event is 13 (enter), there are values in the search bar, and making sure the query is not the same as before.
    if (e.which === 13 && this.$searchInput.val() && this.model.get('query') !== this.$searchInput.val() && this.$searchInput.val().length < 30) {
      // if all pass, set AppModel query to input value
      this.model.set('query', this.$searchInput.val());
      // else if blanks or chars chars > 30, alert user.
    } else if (e.which === 13 && this.model.get('query') !== this.$searchInput.val()) {
      alert("Try a different search. Blanks or more than 30 characters are not allowed.");
    }
  },

  renderPlayer: function(videosCollection) {
    // if there are no results, alert user
    if(this.model.get('playingVideo') === undefined){
      alert("Sorry, no video found");
    } else {
      // Empty player section, then make new View to render currentVideo, and append it to dom.
      this.$videoSection.empty();
      var player = new CurrentVideoDetailView();
      this.$videoSection.append(player.render(this.model.get('playingVideo')).el);
    };
  },

  renderPlaylist: function(VideoModel) {
    var playlist = new SideVideosView({model: VideoModel});
    this.$playlistSection.append(playlist.render().el);

    // if there are no playing video, set 1st video to playing video
    if (!this.model.get('playingVideo')) {
      this.model.set('playingVideo', this.model.get('videos').at(0));
    }
  },

  // whenever query changed, clear playlist section
  clearPlaylist: function() {
    this.$playlistSection.empty();
  },

  // this will trigger fetch more videos when it's close to the bottom of the list
  // this = playlist
  fetchMoreVideos: function() {
    if ($(this).scrollTop() + $(this).height() >= $(this)[0].scrollHeight - 200) {
      appModel.get('videos').fetchMore(appModel.get('query'));
    }
  }
});
