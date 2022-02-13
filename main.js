var VideoModel = Backbone.Model.extend({
  defaults: {
    id: '',
    title: 'Lines from Gandalf',
    description: 'All that is gold does not glitter',
    thumbnail_url: '' 
  }
});

var VideosCollection = Backbone.Collection.extend({
  defaults: {
    url: '',
  },

  model: VideoModel,

  parse: function (response) {
    return response.items.map(function (video) {
      return {
        id: video.id.videoId,
        title: video.snippet.title,
        description: video.snippet.description,
        thumbnail_url: video.snippet.thumbnails.medium.url
      }
    });
  },

});

var AppModel = Backbone.Model.extend({
  mainVideo: null,

  videos: new VideosCollection(),

  fillVideosCollection: function (query) {
    
    // this.videos.url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=' + query + '&type=video&videoEmbeddable=true&key=AIzaSyCV6fnl409__rj0J_h7JEK6CauaPuM4TR0',

    // this.videos.fetch({reset: true});
    this.videos.reset(this.videos.parse(sampleData))
  },

  setMainVideo: function (videoNumber) {
    var newVideo = this.videos.models[videoNumber - 1];

    this.mainVideo = newVideo;
  },
});


var AppView = Backbone.View.extend({
  el: 'body',

  events: {
    'click .search': 'updateVideoCollection'
  },

  initialize: function () {
    this.listenTo(this.model.videos, 'reset', this.assignFirstVideo);
    this.listenTo(this.model.videos, 'reset', this.renderThumbnails);
    this.listenTo(this.model, 'change:mainVideo', this.renderPlayerView);
  },

  updateVideoCollection: function () {

    this.query = this.$('.search-input').val();

    this.model.fillVideosCollection(this.query.split(' ').join('+'));
  },

  assignFirstVideo: function () {
    this.model.setMainVideo(1);
  },

  renderThumbnails: function (collection) {
    
  }
});

var appModel = new AppModel();

var appView = new AppView({model: appModel});