var PlaylistView = Backbone.View.extend({
  className: 'playlist py-1',

  template: Handlebars.compile($('#playlists-template').html()),

  events: {
    'click .manage-playlist': 'displayPlaylistManager',
    'click .add-video': 'addVideoToPlaylist',
    'click .delete-playlist': 'deletePlaylist',
    'click .playlist-link': 'loadPlaylist',
  },

  initialize: function() {
    this.listenTo(this.model.get('playlist'), 'remove', this._renderPlaylistDetails);

    this.listenTo(this.model.get('playlist'), 'add', this._renderPlaylistDetails);
  },

  //renders details of playlist in left-navbar
  _renderPlaylistDetails: function(m){
    //store the div target in a variable to use in the forEach(function) since the data is lost for some reason inside that function
    let details = this.model.get('playlist').models
    let targetDiv = this.$('.add-video').closest('.playlist').find('.playlist-list')
    targetDiv.empty();
    details.forEach(function(m){

      var playlistDetailView = new PlaylistDetailView({model:m})

      /*this.$('.add-video').closest('.playlist').find('.playlist-list') doesn't equal targetDiv here for some reason*/
      targetDiv.append(playlistDetailView.render().el);
    })
  },

  //whenever manage-playlist is clicked, toggle displays to show playlist details in left-navbar and executre this._renderPlaylistDetails() *FIX: hide other playlists*
  displayPlaylistManager: function() {
    let targetDiv = this.$('.add-video').closest('.playlist').find('.playlist-list')
    this.$('.add-video').toggleClass('hidden')
    this.$('.delete-playlist').toggleClass('hidden')

    targetDiv.toggleClass('hidden')


    this._renderPlaylistDetails()


  },

  //when playlist name is clicked, load playlist to currentVideoView and relatedVideosView by executing appViews _renderCurrentVideo & _renderRelatedVideos
  loadPlaylist: function() {
    $('#related-videos').empty();

    this.model.get('playlist').models.forEach(function(m, index) {

      if (index == 0) {
        appView._renderCurrentVideo(m);
      }
      appView._renderRelatedVideos(m);
    })
  },

  /*FOLLOWING FUNCTION NOT FINISHED: needs to check to see if video is already in playlist before adding. I already did this in appView.rememberHistory. Do it again. Maybe create a function that both of these use and then returns found as true or false*/

  //from click event above: adds current_video to playlist
  addVideoToPlaylist: function() {

    let playlist = this.model.attributes.playlist
    let found = false;
    // console.log(this.model.collection.models)
    // console.log(playlist.models.length)
    for (i = 0; i < playlist.models.length; i++) {
      // console.log(playlist.models[i])
      /* Check to see if video already in playlist */
    }

    //checks to see if there is a current video loaded
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

  // from click event above: delete entire playlist and re-render view
  deletePlaylist: function(){
    this.model.destroy();
    savePlaylistsToLocalStorage();
    appView._renderPlaylistLists()
  },

  render: function(index) {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
})
