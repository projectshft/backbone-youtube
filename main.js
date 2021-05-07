
var apiKey = 'AIzaSyCXJ4dabPUSUUVCbFRMWJP59dgxIU28pOM';
var apiKey2 ='AIzaSyDuLOmcG7dtogQ77TibHExIFa9j7yE4TDI'; 
var apiKey3 = 'AIzaSyD6V5RSwk9iwF5--_1P_1BwM5P_fr9UPac'; 

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
      apiKey: 'AIzaSyD6V5RSwk9iwF5--_1P_1BwM5P_fr9UPac',
    };
  },

  
  initialize: function () {
    this.set('searchTerm', 'alex honnold'); //default
  }, 

  updateSearch: function () {
    this.get('videos').makeFetch(this.get('searchTerm'), this.get('apiKey'));
  },

  updateCurrentVideo: function (videoId) {
    var allVideos = this.get('videos');
    var currentVideo = allVideos.findWhere({videoId: videoId});

    this.set('currentVideo', currentVideo);
  }
});

var VideosCollection = Backbone.Collection.extend({
  url:  '',

  model: VideoModel,

  makeFetch: function (searchTerm, apiKey) {
    this.url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=' + searchTerm + '&type=video&videoEmbeddable=true&key=' + apiKey;
    
    if (this.length !== 0) {
      this.reset();
      this.fetch(); 
    } else {
      this.fetch();
    };
  },
  
  parse: function(response) {
    var resVideo = response.items
    return resVideo.map(function (video) {
      return {
        videoId: video.id.videoId,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnails: video.snippet.thumbnails.default.url
      }
    });
  },

  defaultVideo: function () {
    return this.at(0); 
  }
});

var VideoView = Backbone.View.extend({
  className: 'side-bar-videos',

  template: Handlebars.compile($('#side-bar-template').html()),

  initialize: function () {
    this.$sideBar = this.$('.side-bar')
  },

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
    'click .video-thumbnails': 'getCurrentVideoId'
  },

  initialize: function () {
    this.$searchTerm = this.$('#video-search'); 
    this.$mainVideo = this.$('.main-video');
    this.$sideBar = this.$('.side-bar');
    
    this.listenTo(this.model, 'change:searchTerm', this.model.updateSearch());
    this.listenTo(this.model.get('videos'), 'add', this.renderVideos);
    this.listenTo(this.model.get('videos'), 'update', this.renderMainVideo )
    this.listenTo(this.model, 'change:currentVideo', this.renderCurrentVideo);
  },

  handleSearchButtonClick: function () {
    this.renderPage();
    this.model.set('searchTerm', this.$searchTerm.val()); 
    this.model.updateSearch(); 
  },

  getCurrentVideoId: function (e) {
    var clickedVideoId = $(e.currentTarget).data().id;
    this.model.updateCurrentVideo(clickedVideoId);
  },

  renderPage: function () {
    this.$sideBar.empty();
    this.$mainVideo.empty();
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
    currentVideoModel = this.model.get('currentVideo'); 
    var mainVideoView = new MainVideoView ({model: currentVideoModel});
    this.$mainVideo.append(mainVideoView.render().el); 
  },

});



//instances
var appModel = new AppModel();
var appView = new AppView({model: appModel}); 







