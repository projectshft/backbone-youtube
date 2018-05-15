var PlaylistView = Backbone.View.extend({
  className: 'playlist py-1',

  template: Handlebars.compile($('#playlists-template').html()),

  events: {
    'click .manage-playlist': 'displayPlaylistManager',
    'click .add-video': 'addVideoToPlaylist',
    'click .delete-playlist': 'deletePlaylist',
    'click .playlist-link': 'loadPlaylist',
    // 'click .playlist-video-title':'testThis'
  },

  initialize: function() {
    this.listenTo(this.model.get('playlist'), 'remove', this._renderPlaylistDetails);

    this.listenTo(this.model.get('playlist'), 'add', this._renderPlaylistDetails);
  },

  _renderPlaylistDetails: function(m){

    let details = this.model.get('playlist').models
    let targetDiv = this.$('.add-video').closest('.playlist').find('.playlist-list')
    targetDiv.empty();
    details.forEach(function(m){

      var playlistDetailView = new PlaylistDetailView({model:m})

      targetDiv.append(playlistDetailView.render().el);
    })
  },

  displayPlaylistManager: function() {
    let targetDiv = this.$('.add-video').closest('.playlist').find('.playlist-list')
    this.$('.add-video').toggleClass('hidden')
    this.$('.delete-playlist').toggleClass('hidden')

    targetDiv.toggleClass('hidden')


    this._renderPlaylistDetails()


  },

  loadPlaylist: function() {
    $('#related-videos').empty();

    this.model.get('playlist').models.forEach(function(m, index) {

      if (index == 0) {
        appView._renderCurrentVideo(m);
      }
      appView._renderRelatedVideos(m);
    })
    // alert('success')
  },

  addVideoToPlaylist: function() {

    let playlist = this.model.attributes.playlist
    let found = false;
    // console.log(this.model.collection.models)
    // console.log(playlist.models.length)
    for (i = 0; i < playlist.models.length; i++) {
      // console.log(playlist.models[i])
      /* Check to see if video already in playlist */
    }

    if (appModel.get('current_video').videoId != null) {


      playlist.add({
        title: appModel.get('current_video').title,
        videoId: appModel.get('current_video').videoId,
        thumbnail: appModel.get('current_video').thumbnail,
      })
      savePlaylistsToLocalStorage();

    } else {
      alert('please search for a song')
    }


  },

  deletePlaylist: function(){
    this.model.destroy();
    savePlaylistsToLocalStorage();
    appView._renderPlaylistLists()
  },

  render: function(index) {
    // console.log(this.model)
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
})
