// Models
var VideosModel = Backbone.Model.extend({
  defaults: function () {
    return {
      title: '',
      description: '',
      thumbnailUrl: '',
      vidId: ''
    }
  }
});

var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection(), 
      mainVideo: null
    }
  },
  initialize: function() {
    this.listenTo(this.get('videos'), 'reset', this.setMainVideo);
  },
  setMainVideo: function() {
    this.set('mainVideo', this.get('videos').at(0));
  },
  updateMainVideo: function (id) {
    var allVideos = this.get('videos');
    var currentVideo = allVideos.findWhere({ videoId: id });

    this.set('mainVideo', currentVideo);
  }
});

// Collections
var VideosCollection = Backbone.Collection.extend({
  model: VideosModel,

  url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=crossfit&type=video&videoEmbeddable=true&key=AIzaSyBVdIxBbMs80EdoprtW-AAB3YeXaC1JerA`,

  parse:function (response) {
    return response.items.map(function(video){
      return {
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnailUrl: video.snippet.thumbnails.default.url,
        vidId: video.id.videoId
      };
    })
   },

  initialize:function() {
    this.on('add', function(model){
      model.fetch();
    })
  },

  searchVideo: function (searchTerm) {
    this.url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${searchTerm}&type=video&videoEmbeddable=true&key=AIzaSyBVdIxBbMs80EdoprtW-AAB3YeXaC1JerA`;

    this.fetch({reset:true});
  },
});

// Views
var MainVideoView = Backbone.View.extend({
  className: 'video',

  template: Handlebars.compile($('#video-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this
  }
});

var SideVideosView = Backbone.View.extend({
  className: 'playlist',

  template: Handlebars.compile($('#playlist-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));

    return this
  }
});

var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search':'findVideo',
    'click .video-title': 'updateVideo'
  },

  initialize: function() {
    this.$searchInput = this.$('#search-query');
    this.$videos = this.$('.videos');
    this.$playlist = this.$('.playlist');

    this.listenTo(this.model.get('videos'), 'reset', function () {
      this.renderVideo();
      this.renderPlaylist();
    });

    this.listenTo(this.model.get('mainVideo'), 'change', this.renderVideo);
  }, 

  updateVideo: function (e) {
    var clickedVidId = $(e.currentTarget).data().id;

    this.model.updateMainVideo(clickedVidId);
  },

  findVideo: function() {
    var videoSearch = this.$searchInput.val();  

    this.model.get('videos').searchVideo(videoSearch);
  },

  renderVideo: function() {
    this.$videos.html('');

    var firstVideoModel = this.model.get('mainVideo');

    var videoView = new MainVideoView({model: firstVideoModel});

    this.$videos.append(videoView.render().el);
  },

  renderPlaylist: function() {
    this.$playlist.html('');
    this.model.get('videos').forEach(function (video) {
      var sideVideoView = new SideVideosView({model: video});
      this.$('.playlist').append(sideVideoView.render().el);
    })
  },

});

var appModel = new AppModel();
var appView = new AppView({ model: appModel });
appModel.get('videos').fetch({ reset: true });