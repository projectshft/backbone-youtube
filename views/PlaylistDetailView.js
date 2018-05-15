var PlaylistDetailView = Backbone.View.extend({
  className: 'playlists-details',

  template: Handlebars.compile($('#playlists-details-template').html()),

  events:{
    'click .playlist-video-title':'removeVideo'
  },

  removeVideo: function() {

    this.model.destroy();
    savePlaylistsToLocalStorage();
    // console.log(this.model)
  },

  render: function(){


    this.$el.html(this.template(this.model.toJSON()));
    // console.log(this.template())
    // console.log(this)
    return this;
  }

})
