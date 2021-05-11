var VideoModel = Backbone.Model.extend({
  defaults: {
    videoId: '',
    title: '',
    description: '',
    thumbnails: '',
    viewed: false
  },
});

var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection(),
      searchTerm: '',
      currentVideo: null,
      apiKey: 'AIzaSyD6V5RSwk9iwF5--_1P_1BwM5P_fr9UPac',
    };
  },

  initialize: function () {
    //default search
    this.set('searchTerm', 'alex honnold'); 
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

  setLocalStorage: function (videoId) {
     //local storage key value based on videoId and URL
    var videoURL = 'https://www.youtube.com/embed/' + videoId
    localStorage.setItem(videoId, videoURL); 
  }
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
      var localId = video.id.videoId; 
      return {
        videoId: video.id.videoId,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnails: video.snippet.thumbnails.default.url,
        //if localId is stored in local storage, url will populate. if not, will be null. if value present, will kick off if condition in handlebars template
        viewed: localStorage.getItem(localId) 
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
  }
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

    //Autoplay of clicked thumbnail video and sets videoId to local storage 
    //Couldn't figure out how to click the video in the iframe on the default search, so you have to click a thumbnail or make a new search for it to kick off the autoplay. I couldn't figure out the youtube iframe API. Ideally, I would set some sort of condition that a viewed video was either played until the end or for a set length of time. 
    this.model.setLocalStorage(clickedVideoId); 
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

  renderCurrentVideo: function (currentVideoModel) { 
    this.$mainVideo.empty(); 
    //renders main video based on current video in appModel
    currentVideoModel = this.model.get('currentVideo'); 
    var mainVideoView = new MainVideoView ({model: currentVideoModel});
    this.$mainVideo.append(mainVideoView.render().el); 
  },
});

var appModel = new AppModel();
var appView = new AppView({model: appModel}); 