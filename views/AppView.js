var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'keyup #search-input': 'fetchSearch',
  },

  initialize: function () {
    this.$playlist = this.$('.playlist');
    this.$player = this.$('.player');
    this.listenTo(this.model.get('videos'), 'add', this.renderPlaylist);
    this.listenTo(this.model, 'change:current_video', this.renderCurrentVideo);
    this.makeVideoList("Dachsunds are awesome");
  },

  fetchSearch: function (e) {
    if (e.keyCode === 13) {
      query = $("#search-input").val()
      this.$playlist.html('');
      this.makeVideoList(query);
    }
  },

  makeVideoList: function(query) {

    appModel.set('search', query);

    var url ="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + query + '&type=video&key=AIzaSyC6RFkUeKmw8F_wm1Oj3i1WO0ReLI7FroU';
    
    $.ajax({
      method: "GET",
      url: url,
      dataType: "json",
      success: function(data) {
        for (let i = 0; i < data.items.length; i++) {
          appModel.get('videos').add({
            videoId: data.items[i].id.videoId,
            title: data.items[i].snippet.title,
            thumbnail: data.items[i].snippet.thumbnails.default.url,
            description: data.items[i].snippet.description
          });
        }
        //This sets the current video
          let currentVideo = data.items[0].id.videoId;
          appModel.set('current_video', currentVideo);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert(textStatus, errorThrown);
      }
    });
  },

  renderPlaylist: function (video) {
    var playlistView = new PlaylistView({ model: video });
    this.$playlist.append(playlistView.render().el);
  },

  renderCurrentVideo: function () {
    let currentModel = appModel.get('videos').get(appModel.get('current_video'));
    var videoView = new VideoView({model: currentModel});
    this.$player.html('');
    this.$player.append(videoView.render().el);
  }
});