
var APIkey = 'AIzaSyCRxZDF8wrnm67fIS3QkhUXhJMuIWOUMco';

var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'keyup #search': 'fetchSearch',
    'click .search-button' : 'fetchSearch'
  },

  initialize: function () {
    this.$nextVideos = this.$('.next-videos');
    this.$videoPlayer = this.$('.video-player');
    this.listenTo(this.model.get('videos'), 'add', this.renderNextVideos);
    this.listenTo(this.model, 'change:current_video', this.renderCurrentVideo);
    this.makeVideoList('cats');
  },

  fetchSearch: function (e) {
    if (e.keyCode === 13) {
      query = $("#search").val()
      this.$nextVideos.html('');
      this.makeVideoList(query);
    }
  },

  makeVideoList: function(query) {

//Figure out how to make this work with backbone fetch and parse instead of jQuery ajax call

    appModel.set('search', query);

    var url ='https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=' + query + '&type=video&key=' + APIkey;

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

          let currentVideo = data.items[0].id.videoId;
          appModel.set('current_video', currentVideo);
      },
      error: function(jqXHR, textStatus, errorThrown) {
        alert(textStatus, errorThrown);
      }
    });
  },

  renderNextVideos: function (video) {
    var nextVideosView = new NextVideosView ({ model: video });
    this.$nextVideos.append(nextVideosView.render().el);
  },

  renderCurrentVideo: function () {
    let currentModel = appModel.get('videos').get(appModel.get('current_video'));
    var videoView = new VideoView({model: currentModel});
    this.$videoPlayer.html('');
    this.$videoPlayer.append(videoView.render().el);
  }
});
