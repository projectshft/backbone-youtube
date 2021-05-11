var VideoModel = Backbone.Model.extend({
  defaults: {
    videoId: '',
    title: '',
    description: '',
    thumbnails: '',
  },
});

var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection(),
      searchTerm: '',
      currentVideo: null,
      apiKey: 'AIzaSyCXJ4dabPUSUUVCbFRMWJP59dgxIU28pOM',
    };
  },

  initialize: function () {
    //default search
    this.set('searchTerm', 'babies laughing at dogs'); 
    this.updateSearch(); 
  }, 

  updateSearch: function () {
    this.get('videos').makeFetch(this.get('searchTerm'), this.get('apiKey'));
  },
  
  updateCurrentVideo: function (videoId) {
    var allVideos = this.get('videos');
    var currentVideo = allVideos.findWhere({videoId: videoId});

    this.set('currentVideo', currentVideo);
  },
});

var VideosCollection = Backbone.Collection.extend({
  url:  '',

  model: VideoModel,

  makeFetch: function (searchTerm, apiKey) {
    this.url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=' + searchTerm + '&type=video&videoEmbeddable=true&key=' + apiKey;

    this.fetch(); 
  },

  parse: function(response) {
    var resVideo = response.items;

    return resVideo.map(function (video) {
      return {
        videoId: video.id.videoId,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnails: video.snippet.thumbnails.default.url, 
      }
    });
  },
  //sets a main video at random 
  defaultVideo: function () {
    var randomVideo = Math.floor(Math.random() * this.length);
    return this.at(randomVideo); 
  },
});

var VideoView = Backbone.View.extend({
  className: 'side-bar-videos',

  template: Handlebars.compile($('#side-bar-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON())); 
    return this; 
  },
});

var MainVideoView = Backbone.View.extend({
  className: 'main-video',

  template: Handlebars.compile($('#main-video-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON())); 
    return this; 
  },
});

var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search-button': 'handleSearchButtonClick',
    'click .video-thumbnails': 'getCurrentVideoId',
  },

  initialize: function () {
    this.$searchTerm = this.$('#video-search'); 
    this.$mainVideo = this.$('.main');
    this.$sideBar = this.$('.side-bar');
    
    this.listenTo(this.model.get('videos'), 'add', this.renderVideos);
    this.listenTo(this.model.get('videos'), 'update', this.renderMainVideo);
    this.listenTo(this.model, 'change:currentVideo', this.renderCurrentVideo);
  },

  handleSearchButtonClick: function () {
    if(this.$searchTerm.val()) {
      this.$sideBar.empty(); 
      this.$mainVideo.empty(); 
      this.model.set('searchTerm', this.$searchTerm.val()); 
      //fetch data and autoplay main video
      this.model.updateSearch(); 
    };
  },

  getCurrentVideoId: function (e) {
    var clickedVideoId = $(e.currentTarget).data().id;
    
    //Changes current video 
    this.model.updateCurrentVideo(clickedVideoId);
  },

  renderVideos: function (sideBar) { 
    var videoView = new VideoView ({model: sideBar});
    this.$sideBar.append(videoView.render().el);
  },

  
  renderMainVideo: function () {
    var mainVideo = this.model.get('videos').defaultVideo(); 
    var mainVideoView = new MainVideoView ({model: mainVideo});
    this.$mainVideo.append(mainVideoView.render().el); 
  }, 

  renderCurrentVideo: function () { 
    this.$mainVideo.empty(); 
    //renders main video based on current video in appModel
    var currentVideoModel = this.model.get('currentVideo'); 
    var mainVideoView = new MainVideoView ({model: currentVideoModel});
    this.$mainVideo.append(mainVideoView.render().el); 
  },
});

var appModel = new AppModel();
var appView = new AppView({model: appModel}); 