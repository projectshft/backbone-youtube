// VIEWS

var ThumbView = Backbone.View.extend({

  className: "thumb",

  template: Handlebars.compile($('#thumb-template').html()),

  render: function() {
    
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});

var MainVideoView = Backbone.View.extend({
  
  className: "main-video",

  template: Handlebars.compile($('#main-template').html()),

  render: function() {
    
    this.$el.html(this.template(this.model.toJSON()));

    return this;
    }

});


// MODELS / COLLECTIONS

var VideoModel = Backbone.Model.extend({
  
  defaults: function () {
    return {
      id: '',
      title: '', 
      description: '',
      thumbURL: ''
    }
  },
});

var VideosCollection = Backbone.Collection.extend({
  url: '',
  
  model: VideoModel,

  initialize: function() {
    this.url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=animal+crossing&type=video&videoEmbeddable=true&key=AIzaSyDkqrhy0guuVeIg6Madb8Iye1V466P7aIE';
  },

  parse: function(response) {
    return response.items.map(function (video) {
      return {
        id: video.id.videoId,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbURL: video.snippet.thumbnails.default.url
      }
    });
  },

  updateSearchURL: function(q) {
    this.url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=' + q + '&type=video&videoEmbeddable=true&key=AIzaSyDkqrhy0guuVeIg6Madb8Iye1V466P7aIE';

  }
});

var AppModel = Backbone.Model.extend({
  
  defaults: function() {
    return {
      videos: new VideosCollection(),
      main_video: '',
    };
  },

  initialize: function() {
    this.listenTo(this.get('videos'), 'reset', this.updateMainVideo);
  },

  updateMainVideo: function(id) {
    if (typeof(id) == 'string') {
      var allVideos = this.get('videos');
      var currentThumb = allVideos.findWhere({ id: id });
      this.set('main_video', currentThumb);
    } else {
      var firstVideo = this.get('videos').models[0];
      this.set('main_video', firstVideo);
    }
  },

});

var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click #video-submit' : 'handleNewSearch',
    'click .thumb-content' : 'handleNewMain'
  },

  initialize: function () {
    
    this.listenTo(this.model.get('videos'), 'reset', this.renderThumbs);
    this.listenTo(this.model, 'change:main_video', this.renderMainVideo);
  },

  handleNewSearch: function() {

    var searchInput = $('#search-input').val()
    this.model.get('videos').updateSearchURL(searchInput);

    this.model.get('videos').fetch({ reset: true });
  },

  handleNewMain: function(e) {
    var clickedThumb = $(e.currentTarget).data().id;
    this.model.updateMainVideo(clickedThumb)    
  },

  renderThumb: function (video) {
    var thumbView = new ThumbView({ model: video });
    this.$('.thumb-col').append(thumbView.render().el);
  },

  renderThumbs: function() {
    this.$('.thumb-col').empty();
    this.model.get('videos').each(function (m) {
      this.renderThumb(m);
    }, this);
  },

  renderMainVideo: function() {
    this.$('.main-col').empty();
    var mainVideoView = new MainVideoView( {model: this.model.get("main_video")});
    this.$('.main-col').append(mainVideoView.render().el);
  }
});

var appModel = new AppModel();
var appView = new AppView({ model: appModel});
appModel.get('videos').fetch({ reset: true });
