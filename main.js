var AppModel = Backbone.Model.extend({
  defaults: function() {
    return {
      //current_video represents video being shown on main display
      current_video_model: null,
      videos: new VideosCollection()
    }
  }
})

var AppView = Backbone.View.extend({
  el: $('body'),

  initialize: function () {
    //renders sidebar videos on a reset event
    this.listenTo(this.model.get('videos'), 'reset', this.setMainVideo);
    this.listenTo(this.model.get('videos'), 'reset', this.renderSidebarVideos);
    this.listenTo(this.model.get('videos'), 'reset', this.renderMainVideo);
    this.current_video_view = null;
  },

  events: {
    'click .card': 'loadNewMainVideo'
  },

  loadNewMainVideo: function(e) {
    var modelID = $(e.currentTarget).data().id;
    //this.current_video_view.remove();
    this.model.current_video_model = this.model.get('videos').remove(modelID);
    this.current_video_view = new MainVideoView({ model : this.model.current_video_model});
    $('.main-video').empty();
    this.renderSidebarVideos();
    this.renderMainVideo();
  },

  //creates a SidebarVideoView from a video model, appending it to the sidebar
  renderSidebarVideo: function(vid) {
    var sidebarVideoView = new SidebarVideoView({ model: vid});
    $('.sidebar').append(sidebarVideoView.render().el);
    console.log('rendered ' + sidebarVideoView);
  },

  setMainVideo: function(videoId) {
    var mainVideo = this.model.get('videos').shift(0);
    this.model.current_video_model = mainVideo;
    this.current_video_view = new MainVideoView({model: mainVideo});
  },

  renderMainVideo: function() {
    var mainVideoView = new MainVideoView({ model: this.model.current_video_model});
    $('.main-video-container').append(mainVideoView.render().el);
  },

  //loops through collection of videos stored in AppModel- videos, rendering each video
  renderSidebarVideos: function() {
    $('.sidebar').empty();
    this.model.get('videos').each(function (vid) {
      this.renderSidebarVideo(vid);
    }, this);
  }
})

//view for each sidebar video
var SidebarVideoView = Backbone.View.extend({
  className: "sidebar-card",
  template: Handlebars.compile($('#sidebar-video-template').html()),

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
})

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
    thumbnail_url: ''
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
        id: item.id.videoId
      }
    }, this);
  }
})

var appModel = new AppModel();

var appView = new AppView({
  model: appModel
});

appModel.get('videos').fetch({ reset: true });
