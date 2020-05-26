var API_KEY = 'AIzaSyCE-KSue_A5ZAeyQxG6tV_YZykHyMBTnUQ'

var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      //mainVideoModel represents model for video being shown on main display
      mainVideoModel: null,
      videos: new VideosCollection()
    }
  },

  //updates VideoCollection url and sends API request with searchTerm (input from searchbar)
  fetchNewVideos: function(searchTerm) {
    var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=' + searchTerm + '&type=video&key=' + API_KEY;
    //setting VideosCollection url to include searchTerm
    this.get('videos').url = url;
    this.get('videos').fetch({
      reset: true
    });
  }
});

var AppView = Backbone.View.extend({
  el: $('body'),

  initialize: function() {
    //represents vew for main video
    this.mainVideoView = null;
    this.listenTo(this.model.get('videos'), 'reset', this.renderMainVideo);
  },

  //events to search for videos when button is clicked, and load a new main video from the sidebar
  events: {
    'click .card': 'renderMainVideo',
    'click .btn': 'search'
  },

  search: function() {
    //fetches searchTerm from searchbar input
    var searchTerm = $('.form-control').val();
    //if statement to validate input
    if (!searchTerm) {
      alert("Search cannot be empty!");
    } else {
      this.model.set('mainVideoModel', null);
      this.mainVideoView = null;
      this.model.fetchNewVideos(searchTerm)
    }
  },

  //creates a SidebarVideoView from a video model, appending it to the sidebar
  renderSidebarVideo: function(videoModel) {
    var sidebarVideoView = new SidebarVideoView({
      model: videoModel
    });
    $('.sidebar').append(sidebarVideoView.render().el);
  },

  //renders main video from click event, when the page is initialized, or when a new search is made
  renderMainVideo: function(e) {
    //if statement to load first video as main video when page is loaded or new search is made
    // otherwise, loads clicked video from sidebar
    if (!this.model.get('mainVideoModel')) {
      this.model.mainVideoModel = this.model.get('videos').shift(0);
    } else {
      // modelID is the ID for each model (as well as the videoID for Youtube)
      var modelID = $(e.currentTarget).data().id;
      //clicked sidebar video is removed form sidebar, and moved to main video
      this.model.mainVideoModel = this.model.get('videos').remove(modelID);
    }
    //empties main-video-container before loading new main video
    $('.main-video-container').empty();
    this.mainVideoView = new MainVideoView({
      model: this.model.mainVideoModel
    });
    $('.main-video-container').append(this.mainVideoView.render().el);
    //renders sidebar videos after to prevent main video from showing in the sidebar
    this.renderSidebarVideos();
  },

  //loops through collection of videos stored in AppModel- videos, rendering each video
  renderSidebarVideos: function() {
    //empties sidebar before re-rendering
    $('.sidebar').empty();
    this.model.get('videos').each(function(vid) {
      this.renderSidebarVideo(vid);
    }, this);
  }
});

//view for each sidebar video
var SidebarVideoView = Backbone.View.extend({
  className: "sidebar-card",
  template: Handlebars.compile($('#sidebar-video-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});

//view for main video,
var MainVideoView = Backbone.View.extend({
  className: "main-video",
  template: Handlebars.compile($('#main-video-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
})

var VideoModel = Backbone.Model.extend({
  defaults: {
    title: '',
    description: '',
    thumbnail_url: '',
    id: ''
  }
})

//collection of video models stored in AppModel
var VideosCollection = Backbone.Collection.extend({
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&type=video&key=' + API_KEY,
  model: VideoModel,
  //parse function adds only relevant information to each video model
  parse: function(response) {
    return response.items.map(function(item) {
      return {
        title: item.snippet.title,
        description: item.snippet.description,
        thumbnail_url: item.snippet.thumbnails.high.url,
        //id is used to grab video models from collection and also create the Iframe for a youtube video
        id: item.id.videoId
      }
    }, this);
  }
})

var appModel = new AppModel();

var appView = new AppView({
  model: appModel
});

appModel.get('videos').fetch({
  reset: true
});
