var VideoModel = Backbone.Model.extend({
  idAttribute: 'videoId',
  defaults: {
      title: '',
      description: '',
      thumbnail_url: ''
  },

});

var VideosCollection = Backbone.Collection.extend({  
  model: VideoModel,

  parse: function (response) { 
    return response.items.map(function (video) {
      return {
        videoId: video.id.videoId,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail_url: video.snippet.thumbnails.default.url
      }
    });
  }
}); 

var CurVideoView = Backbone.View.extend({
  className: 'current-video',

  template: Handlebars.compile($('#current-video-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));

    return this;
  }
});

var SugVideoView = Backbone.View.extend({
  className: 'suggested-videos',
  
  template: Handlebars.compile($('#video-template').html()),

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
  
    return this;
  }
});

var AppModel = Backbone.Model.extend({
  defaults: function () {
    return {
      videos: new VideosCollection(),

      currentVideo: null,
    };
  },

  initialize: function () {
    this.listenTo(this.get('videos'), 'reset', this.defaultCurrentVideo);
  },

  defaultCurrentVideo: function () {
    this.set('currentVideo', this.get('videos').first());
  },

  updateCurrentVideo: function (id) {
    var currentVideo = this.get('videos').findWhere({ videoId: id });

    this.set('currentVideo', currentVideo);
  },
   
});

var AppView = Backbone.View.extend({
  el: $('body'),

  events: {
    'click .search': 'search',
    'click .view-video': 'setCurrentVideo'
  }, 

  endPoint: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&videoEmbeddable=true&key=AIzaSyDtE6JCuU9DF15tILcOmRBMdm3TM875UxQ&q=`,
  
  initialize: function () {
    this.model.get('videos').fetch({
      reset: true,
      url: `${this.endPoint}cute dogs`, 
    });

    this.listenTo(this.model.get('videos'), 'reset', this.renderVideos);
    this.listenTo(this.model, 'change:currentVideo', this.renderCurrentVideo);   
  },

  setCurrentVideo: function (e) {
    var clickedVideoId = $(e.currentTarget).data().id;
  
    this.model.updateCurrentVideo(clickedVideoId);
  },

  search: function () {
    $search = $('#search-query').val();

    this.model.get('videos').fetch({
      reset: true,
      url: this.endPoint + $search,
    })
  },

  renderSuggestedVideos: function (video) {
    var sugVideoView = new SugVideoView({model: video});
    this.$('.suggested-videos').append(sugVideoView.render().el);
  },

  renderCurrentVideo: function () {
    this.$('.current-video').empty();
    var curVideoView = new CurVideoView({model: this.model.get('currentVideo')});
    this.$('.current-video').append(curVideoView.render().el);
  },

  renderVideos() {
    this.$('.suggested-videos').empty();
    
    this.renderCurrentVideo();

    this.model.get('videos').each(function (videoModel) {
      this.renderSuggestedVideos(videoModel);
    }, this);
  },  

});

var appModel = new AppModel();
var appView = new AppView({model: appModel});
