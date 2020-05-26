var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      //current_video represents video being shown on main display
      current_video_model: null,
      videos: new VideosCollection()
    }
  },

  //updates VideoCollection url and sends API request with searchTerm (input from searchbar)
  fetchNewVideos: function(searchTerm) {
    var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=' + searchTerm + '&type=video&key=AIzaSyChaaV8WZehiaxwY3hxoyEe5yuLTQX2O9M';
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
    this.current_video_view = null;
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
    this.model.fetchNewVideos(searchTerm)
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
    //if statement to load first video as main video when page is loaded
    // otherwise, loads clicked video from sidebar
    if (!this.model.current_video_model) {
      this.model.current_video_model = this.model.get('videos').shift(0);
    } else {
      // modelID is the ID for each model (as well as the videoID for Youtube)
      var modelID = $(e.currentTarget).data().id;
      //clicked sidebar video is removed form sidebar, and moved to main video
      this.model.current_video_model = this.model.get('videos').remove(modelID);
    }
    //empties main-video-container before loading new main video
    $('.main-video-container').empty();
    this.current_video_view = new MainVideoView({
      model: this.model.current_video_model
    });
    $('.main-video-container').append(this.current_video_view.render().el);
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
  url: 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&type=video&key=AIzaSyChaaV8WZehiaxwY3hxoyEe5yuLTQX2O9M',
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
